define([
    "jquery",
    "underscore",
    "backbone",
    "models/qualification",
    "config"
], function ($, _, Backbone, Qualification, config) {
    "use strict";

    return Backbone.Collection.extend({
        model: Qualification,
        initialize: function (models, options) {
            options = options || {};
            this.member_id = options.member_id || false;
            this.unit_id = options.unit_id || null;
            this.skip = 0;
            this.from = options.from || null;
            this.to = options.to || null;
        },
        url: function () {
            var url = config.apiHost;
            if(this.member_id) {
                url += "/members/" + this.member_id;
            }
            else if(this.unit_id) {
                url += "/units/" + this.unit_id;
            }
            url += "/qualifications";
            var params = [];
            if(this.skip) params.push("skip=" + this.skip);
            if(this.from) params.push("from=" + this.from);
            if(this.to) params.push("to=" + this.to);
            if(params.length) url += "?" + params.join("&");
            return url;
        },
        parse: function (response, options) {
            return response.qualifications || [];
        }
    });
});