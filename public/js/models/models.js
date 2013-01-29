window.Cat = Backbone.Model.extend({

    urlRoot: "/childcats",
    
    idAttribute: "_id"
    
});

window.CatCollection = Backbone.Collection.extend({

    model: Cat,

    url: "/childcats"

});

window.Item = Backbone.Model.extend({

    urlRoot: "/catitems",
    
    idAttribute: "_id"
    
});

window.Items = Backbone.Collection.extend({

    model: Item,

    url: "/catitems"

});

window.CartItem = Backbone.Model.extend({

    idAttribute: "_id"
    
});

window.CartItems = Backbone.Collection.extend({

    model: CartItem,

    localStorage: new Backbone.LocalStorage("NBShoppingCart")
});


