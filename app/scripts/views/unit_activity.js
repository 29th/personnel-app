var $ = require("jquery"),
  _ = require("underscore"),
  Backbone = require("backbone"),
  Template = require("../templates/unit_activity.html"),
  config = require("../config.dev"),
  util = require("../util");
var Marionette = require("backbone.marionette");


  var groupActivity = function(dates, collection, type, dateKey) {
      _.each(collection, function(model) {
          var date = typeof dateKey === "function" ? dateKey(model) : model[dateKey].split(" ")[0];
          if(dates[date] === undefined) dates[date] = {date: date};
          if(dates[date][type] === undefined) dates[date][type] = [];
          dates[date][type].push(model);

          // Add forum topic url to model
          if(model.forum_id && model.topic_id && config.forum[model.forum_id] !== undefined) {
              model.topic_url = config.forum[model.forum_id].baseUrl + util.sprintf(config.forum[model.forum_id].topicPath, model.topic_id);
          }
      });
  }
  
  module.exports = Marionette.ItemView.extend({
      template: Template,
      initialize: function(options) {
          options = options || {};

          this.promotions = options.promotions || null;
          this.awardings = options.awardings || null;
          this.finances = options.finances || null;
          this.demerits = options.demerits || null;
          this.eloas = options.eloas || null;
          this.discharges = options.discharges || null;
          this.attendance = options.attendance || null;
      },
      serializeData: function () {
          var items = [],
              dates = {};

          groupActivity(dates, this.promotions.toJSON(), "promotions", "date");
          groupActivity(dates, this.awardings.toJSON(), "awardings", "date");
          groupActivity(dates, this.finances.toJSON(), "finances", "date");
          groupActivity(dates, this.demerits.toJSON(), "demerits", "date");
          groupActivity(dates, this.eloas.toJSON(), "eloas", "posting_date");
          groupActivity(dates, this.discharges.toJSON(), "discharges", "date");
          groupActivity(dates, this.attendance.toJSON(), "attendance", function(model) { return model.event.datetime.split(" ")[0]});

          // Sort descending by date
          items = _.values(dates).sort(function (a, b) {
              if (a.date < b.date) return 1;
              if (b.date < a.date) return -1;
              return 0;
          });

          return {items: items, forum: config.forum};
      }
  });
