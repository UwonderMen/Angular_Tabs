(function(){


	var app = angular.module('App', []);

	app.controller('DeomController', ['$scope', function($scope){
			
			$scope.type = 'local';

			$scope.show = function(ele){
				$scope.type = ele;
			}
	}]);

}())