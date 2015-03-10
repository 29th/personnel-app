define([
    "jquery",
    "underscore",
    "backbone",
    "hbs!templates/member_profile",
    "config",
    "marionette"
], function ($, _, Backbone, Template, config) {
    
    return Backbone.Marionette.ItemView.extend({
        template: Template,
        initialize: function (options) {
            options = options || {};
            this.finances = options.finances || false;
        },
        serializeData: function () {
            var fin_sum = 0;
            for(j=0;j<this.finances.models.length;j++){
             fin_sum = fin_sum + parseInt(this.finances.models[j].attributes.amount_received);
            }
            return _.extend({
                forum: config.forum,
                fin_sum: fin_sum,
                short_name_url: this.model.get("short_name").replace("/", "")
            }, this.model.toJSON());
        }
    });
});