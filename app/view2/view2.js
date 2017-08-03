'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope){
    $scope.searchRole = function(){
      $scope.urlhttp2 = "$http.get(https://quienesquienapi.herokuapp.com/v1/memberships?role=/"+$scope.role+"/i&territory=/"+$scope.org_id+"/i')"

      var url = "https://quienesquienapi.herokuapp.com/v1/memberships?role=/"+$scope.role+"/i&territory=/"+$scope.org_id+"/i"
      httpRequest(url,function(response2){
         console.log($scope.response2);
         $scope.response2 = response2.data;
      })
    };
}]);
