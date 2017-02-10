(function() {
  'use strict';

  angular
    .module('traderFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $scope) {
    var vm = this;

    vm.itemsPerPage = 3;
    vm.itemsPerPageOptions = [3,5,10,20,50];
    vm.currentPage = 1;
    
     function getAllTraders(){
       return  $http({
            method: 'GET',
            url: "http://localhost:9999/trader/all"
        });     
     }       
      
    function getTrades(traderId){
       return  $http({
            method: 'GET',
            url: 'http://localhost:9999/trade/paginated/' + traderId + '?page=' + (vm.currentPage - 1) +'&size=' + vm.itemsPerPage
        });     
     }
      
      vm.saveTrades = function(){
          getTrades(vm.currentTrader.id).then(function(response){
                vm.currentTrades = response.data.content; 
                vm.totalElements = response.data.totalElements;
               console.log(vm.currentTrades);
            });
      }

    getAllTraders().then(function(response){
          vm.traders = response.data;
          vm.currentTrader = vm.traders[0];
          vm.saveTrades();
      }); 

    vm.traderClicked = function(trader){
      vm.currentTrader = trader;
     // console.log(vm.currentTrader.id);
      vm.saveTrades();
    }

    vm.pageChanged = function(){
      vm.saveTrades();
      console.log(vm.currentTrades);
    }


// ---------------------
  






  }
})();