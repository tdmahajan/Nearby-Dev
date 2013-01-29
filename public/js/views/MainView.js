window.MainView = Backbone.View.extend({

    initialize:function () {
    
       this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        
        this.sideBarView = new SideBarView();         
        this.$('#search').after(this.sideBarView.$el); 

	this.productDetailsView = new ProductDetailsView();  
	$('#modalview').append(this.productDetailsView.$el); 

	this.shoppingListView = new ShoppingListView();  
	$('#modalview').append(this.shoppingListView.$el);

        return this;
        
    },
    events: {
        "click #btn_sesrch"   : "search",
	"keyup"            : "search"
    },
  
    search: function () {
        window.location=location.protocol + '//' + location.host +"/#search/"+ document.getElementById("search_txt").value;
	$('#search_txt').blur();
    }
});
