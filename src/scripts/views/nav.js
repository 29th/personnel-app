var $ = require("jquery"),
  _ = require("underscore"),
  Backbone = require("backbone"),
  Template = require("../templates/nav.html"),
  config = require("../config");
var Marionette = require("backbone.marionette");

  
  module.exports = Marionette.ItemView.extend({
      template: Template,
      highlight: "home",
      modelEvents: {
          "change": "render"
      },
      initialize: function (options) {
          options = options || {};
          
          this.units = options.units || {};
          this.units.on("reset", this.render, this);
          
          this.permissions = options.permissions || {};
          this.permissions.on("reset", this.render, this);
      },
      setHighlight: function (highlight) {
          /*this.highlight = highlight;
          this.$(".nav li").removeClass("active");
          if (highlight) this.$(".nav li[data-highlight=\"" + highlight + "\"]").addClass("active");*/
      },
      serializeData: function () {
          return _.extend({
              highlight: this.highlight,
              forum: config.forum,
              wikiUrl: config.wikiUrl,
              permissions: this.permissions.length ? this.permissions.pluck("abbr") : [],
              units: this.units.length ? this.units.toJSON() : []
          }, this.model.toJSON());
      }
  });
