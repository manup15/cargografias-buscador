'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope){
    $scope.search3 = function(){
      console.log($scope.keywords3)
      var url = "https://quienesquienapi.herokuapp.com/v1/memberships?org_id=/" + $scope.keywords3 + "/i"
      httpRequest(url,function(response3){
         console.log($scope.response3);
         $scope.response3= response3.data;
      })
    };
}]);
