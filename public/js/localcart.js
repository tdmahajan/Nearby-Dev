var LocalStorageStore = function(successCallback, errorCallback) {
   this.addItem = function(item){
     var items = JSON.parse(localStorage.getItem("nearbyShoppingCart"));
     var l = items.length;
     var itemExist = 0; 
    for(i = 0; i < l; i++) {
       if( items[i]["_id"] === item["_id"]) {
         items[i]["qty"] = items[i]["qty"] + 1;
         itemExist = 1;
         break;
       }
     }
     if(itemExist === 0){
       items.push(item);
     }
     localStorage.setItem("nearbyShoppingCart", JSON.stringify(items));
   }

   this.removeItem = function(item) {
     var items = JSON.parse(localStorage.getItem("nearbyShoppingCart"));
     var l = items.length;
     var itemExist = 0; 
     for(i = 0; i < l; i++) {
       if( items[i]["_id"] === item["_id"]) {
         items.splice(i,1);
         break;
       }
     }
     localStorage.setItem("nearbyShoppingCart", JSON.stringify(items));   
   }

   this.fetchItems = function(callback) {
     var shoppingCart = JSON.parse(window.localStorage.getItem("nearbyShoppingCart"));
     callLater(callback, shoppingCart);
   }
    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    var cart = JSON.parse(localStorage.getItem("nearbyShoppingCart"));
    if(!cart){
      localStorage.setItem("nearbyShoppingCart", JSON.stringify([]));
    }
}
