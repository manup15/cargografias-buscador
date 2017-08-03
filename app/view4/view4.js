'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])


.controller('View4Ctrl', ['$scope', function($scope){
    $scope.search4 = function(){
      console.log($scope.keywords4,)
      var url = "https://quienesquienapi.herokuapp.com/v1/memberships?territory=/" + $scope.keywords4 + "/i"
      httpRequest(url,function(response4){
         console.log($scope.response);
         $scope.response4 = response4.data;
      })
    };
}]);
