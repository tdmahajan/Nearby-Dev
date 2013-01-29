window.ProductView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

        events: {
        "click #product_img"   : "display_details",
    },
  
    display_details: function () {
        $("#example").modal(); 
    },

});


