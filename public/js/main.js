var AppRouter = Backbone.Router.extend({

    routes: {
        ""                       : "home",
        "category"               : "catSearch",
        "category/:catid"        : "catSearch",
        "search/:freeText"       : "simpleSearch",
	"checkout"		 : "checkout_process"
    },

    initialize: function () {
 
        this.mainView = new MainView();
        $('#main').html(this.mainView.el);
        unicornPlugin();
    },

    home: function (id) {
    
       $('#content').empty();
       
       this.contentHeaderView = new ContentHeaderView();
       $('#content').append(this.contentHeaderView.$el);
       
       $('#content').append('<div class="container-fluid"><div id="cat"></div><div id="prod"></div></div>');
       items = new Items();
       items.url = '/catitems/F002';
       items.fetch({success: function(){   
          $('.container-fluid > #prod').append(new ProductListView({model: items}).$el);
       }
       });
    },
    
    catSearch: function(cat){
    
       console.log(cat);
    
       $('#content').empty();
              
       this.contentHeaderView = new ContentHeaderView();
       $('#content').append(this.contentHeaderView.$el);
       
       $('#content').append('<div class="container-fluid"><div id="cat"></div><div id="prod"></div></div>');
      
       var catList = new CatCollection();
       
       catList.url = '/childcats/'+ cat;
       
       catList.fetch({success: function(){
       	  $('.container-fluid > #cat').append(new SubCatListView({model: catList}).el);
         }
         });
      
       var items = new Items();
       items.url = '/catitems/'+ cat;
       items.fetch({success: function(){   
          $('.container-fluid > #prod').append(new ProductListView({model: items}).$el);
       }
       });
    
    },
    
    simpleSearch: function(freeText){
    
       $('#content').empty();   
       this.contentHeaderView = new ContentHeaderView();
       $('#content').append(this.contentHeaderView.$el);
       
       $('#content').append('<div class="container-fluid"><div id="cat"></div><div id="prod"></div></div>');
       items = new Items();  
       items.url = '/search/'+freeText;
       items.fetch({success: function(){   
          $('.container-fluid > #prod').append(new ProductListView({model: items}).$el);
        }
       });
     
    },

    checkout_process: function(){
	$("#shopping_list").modal("hide");
	$('#content').empty();
        $('#content').append(new ContentHeaderView().$el);
	$('#content').append('<div class="container-fluid"></div>');
	$('.container-fluid').append(new ShopLocationView().$el);
    },
    
    
});

/*
Backbone.sync = function(method, model) {
  console.log("I\'ve been passed " + method + " with " + JSON.stringify(model));
 
};
*/

utils.loadTemplate(['MainView','SideBarView','ContainerFluidView','ContentHeaderView','SubCatListView','SubCatView','ProductListView','ProductView','FooterView','ProductDetailsView','ShoppingListView','CartItemView','ShopLocationView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
