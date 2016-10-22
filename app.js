(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
  var listService = this;

  listService.toBuyList = [
    {name: "cookies", quantity: 10},
    {name: "cake", quantity: 2},
    {name: "potatoes", quantity: 15},
    {name: "apples", quantity: 20},
    {name: "orange", quantity: 18},
    {name: "tacos", quantity: 8}
  ];

  listService.alreadyBoughtList = [];

  listService.buyItem = function (index) {
    if (index > listService.toBuyList.length) {
      return;
    }
    
    listService.alreadyBoughtList.push(listService.toBuyList[index]);
    listService.toBuyList.splice(index, 1);
  }
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyList = ShoppingListCheckOffService.toBuyList;

  toBuy.buy = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.alreadyBoughtList;

}

})();
