window.ShoppingListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function() {
        $(this.el).html(this.template());

    	/*var items = this.model.models;

        for(i=0; i < items.length; i++) {
           $('#shopping_cart',this.el).append(new CartItemView({model: items[i]}).$el);
        };*/

        return this;
    }

});
