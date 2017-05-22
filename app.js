(function() {
  'use strict';

  var ShoppingList1 = ["Milk", "Donuts", "Cookies", "Choclate", "Peanut Butter", "Pepto Bismol (Choclate flavour), Ice-Cream"];

  var ShoppingList2 =[
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Peanut Butter",
      quantity: "5"
    },
    {
      name: "Pepto Bismol (Choclate flavour)",
      quantity: "40"
    },
    {
      name: "Ice-Cream",
      quantity: "600"
    }
  ];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController',ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController ($scope) {
    $scope.ShoppingList1 = ShoppingList1;
    $scope.ShoppingList2 = ShoppingList2;

    $scope.addItemToList = function () {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.ShoppingList2.push(newItem);
    };
  };
})();
