$(document).ready(function(){
  console.log('hi');
  store = new LocalStorageStore();
  store.removeItem({"id":1});
  store.fetchItems(function(items){
	  console.log(items);
  });
});
