'use strict';

angular.module('traderFrontend')
  .directive('singleTrade', function () {
    var directive = {
	    templateUrl: 'app/singleTrade/directives/singleTrade.html',
	    restrict: 'E',
	    scope: {
	              trade: "="
	           },
	    controller: controller,
	    controllerAs: 'vm',
	    bindToController: true
    };

    return directive;

	function controller() {
        var vm = this;

		vm.secsToDate = function(secs) {
		    var t = new Date(secs); // Epoch
		    
		    return t;
		}
    }
  });


