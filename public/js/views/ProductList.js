window.ProductListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function() {
        $(this.el).html(this.template());
        
        var items = this.model.models;

        for(i=0; i < items.length; i++) {
          $('ul',this.el).append(new ProductView({model: items[i]}).$el);
        };

        return this;
    },

    events: {
        "click #addtocart-btn"   : "addToCart",
    },
  
    

    addToCart: function () {
       var nodeId = $(event.target).prev().attr('id');
       var cartItems = new CartItems();
       cartItems.create(
       { "_id": "50fd347ce7c5e470e0a85500-1"
       , "SKUName": "Punjabi Masala Papad"
       , "NetContents": "200"
       , "NetContentsUOM": "gm"
       , "PackagingType": "Pouch"
       , "Qty": 1
       , "BestBuyPrice": 40
       });
    }
});
