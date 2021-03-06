var $ = require("jquery"),
  _ = require("underscore"),
  Backbone = require("backbone"),
  config = require("../config");

  "use strict";

  module.exports = Backbone.Collection.extend({
      initialize: function (models, options) {
          options = options || {};
          this.member_id = options.member_id || false;
          this.unit_id = options.unit_id || false;
      },
      url: function () {
          var url = config.apiHost + "/user/permissions";
          if (this.member_id) url += "/members/" + this.member_id;
          else if (this.unit_id) url += "/units/" + this.unit_id;
          return url;
      },
      parse: function (response, options) {
          return response.permissions || [];
      }
  });
