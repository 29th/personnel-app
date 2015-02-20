define([
    "jquery",
    "underscore",
    "backbone",
    "hbs!templates/member_attendance",
    "hbs!templates/member_attendance_item",
    "marionette"
], function ($, _, Backbone, Template, ItemTemplate) {
    
    var ItemView = Backbone.Marionette.ItemView.extend({
        template: ItemTemplate,
        tagName: "tr"
    });

    return Backbone.Marionette.CompositeView.extend({
        template: Template,
        itemView: ItemView,
        itemViewContainer: "#rows"
        /**
         * Necessary because our collection will finish fetching before this view is rendered,
         * so itemViewContainer doesn't exist. See https://github.com/marionettejs/backbone.marionette/issues/377
         */
        ,
        _initialEvents: function () {
            this.once("render", function () {
                if (this.collection) {
                    this.listenTo(this.collection, "add", this.addChildView, this);
                    this.listenTo(this.collection, "remove", this.removeItemView, this);
                    this.listenTo(this.collection, "reset", this._renderChildren, this);
                }
            }, this);
        },
        initialize: function () {
            _.bindAll(this, "onClickMore");
        },
        events: {
            "click .more": "onClickMore"
        },
        onRender: function () {
            this.checkMoreButton();
        },
        onClickMore: function (e) {
            e.preventDefault();
            var self = this,
                button = $(e.currentTarget);
            button.button("loading");
            this.collection.nextPage().fetch({
                remove: false,
                success: function () {
                    button.button("reset");
                    self.checkMoreButton();
                },
                error: function () {
                    button.button("error");
                }
            });
        },
        checkMoreButton: function () {
            this.$(".more").toggle(this.collection.more);
        },
        serializeData: function () {
            var percentages = {};
            var mod = this.collection.models;
            var d30 = new Date(); 
            var d60 = new Date(); 
            var d90 = new Date();
            d30.setDate(d30.getDate()-30).format;
            d30 := d30.('Y-m-d ')
            d60.setDate(d60.getDate()-60);
            d90.setDate(d90.getDate()-90);
//            alert(d30.toJSON());
//            alert(d60.toJSON());
//            alert(d90.toJSON());
//            alert(mod[0].attributes.event.datetime);
//            for(j=0;j<mod.length;j++){
            for(j=0;j<10;j++){
              if( Date(mod[j].attributes.event.datetime) > d30 )
              {
                alert('OK: ' + mod[j].attributes.event.datetime + ' : ' + d30);
              }
              else
                alert('BAD: ' + mod[j].attributes.event.datetime + ' : ' + d30);
            }
            return _.extend({
              perc30: "abcd"
            });
        }
    });
});