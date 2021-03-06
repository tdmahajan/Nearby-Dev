window.ContentHeaderView = Backbone.View.extend({

    initialize:function () {
        this.render();
        var cartItems = new CartItems();
        $('#modalview').append(new ShoppingListView({model: cartItems}).$el);
        
    },

    render:function () {
        $(this.el).html(this.template());

    	
        return this;
    },
        
    events: {
              "click"   : "pathinfo",
	      "click #shopping_list_btn"   : "display_list",
            },
        
            pathinfo: function(event){
        
             console.log(event.target.href);
        
           },
    
   display_list: function () {
                
           var cartItems = new CartItems();
           $('#modalview').empty();
           cartItems.fetch({success: function(){
              console.log(cartItems.toJSON());
              $('#modalview').append(new ShoppingListView({model: cartItems}).$el);
	      // var items = this.model.models;
	      //console.log(items);
	     	cartItems=cartItems.toJSON();
               for(var i=0; i < cartItems.length; i++) {
			console.log(cartItems[i]);
           		$('#shopping_cart',this.el).append(new CartItemView({model: cartItems[i]}).$el);
        		};
              }
            });
            $("#shopping_list").modal("show");
    	   },
});
