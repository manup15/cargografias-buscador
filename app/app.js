'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'leaflet-directive',
  // 'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider,$scope) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view2'});
}])

.controller('mainCtrl', ['$scope', function($scope){
    var vm = this;
    vm.selectedItemChange = selectedItemChange;
    vm.result = '[]';
    vm.searchTextChange = searchTextChange;
    vm.throttle = 300;


    function selectedItemChange(item) {
        console.log("selectedItemChange");
        vm.result = item.nombre || [];
    }

    function searchTextChange(query) {
        var url = "https://quienesquienapi.herokuapp.com/v1/persons?name=/" + query + "/i"
        httpRequest(url, function(response) {
                vm.items =
                    response.data.map(function(item) {
                        return {
                            nombre: item.simple
                        };
                    }) || [];
            })


    }

    $scope.go = function(nombre) {
      console.log(nombre);
    }

}]);
