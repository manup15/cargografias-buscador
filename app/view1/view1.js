
//view 1 //
//'use strict';
//
// angular.module('myApp.view1', ['ngRoute'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])
//
//
// .controller('View1Ctrl', ['$scope', function($scope){
//     $scope.search = function(){
//       var url = "https://quienesquienapi.herokuapp.com/v1/persons?name=/" + $scope.keywords + "/i"
//       httpRequest(url,function(response){
//          console.log($scope.response);
//          $scope.response = response.data;
//       })
//     };
// }]);
// <div class="main" ng-app="myApp" ng-controller="View1Ctrl">
//     <h1>CARGOGRAFÍAS</h1>
//     <h3>Personas</h3>
//     <input class="form-control field span12" rows="4" ng-model="keywords" ng-change="search()" placeholder="persona"/>
//     <h4>{{urlhttp}}</h4>
//     <li ng-repeat="res in response">
//         <p ng-show="loading">Loading...</p>
//         <h3 ng-hide="loading">{{res.name}}</h3>
//         <p ng-hide="loading"> Datos disponibles: <br>{{res}}</p>
//         <p> &nbsp;</p>
//         <p> &nbsp;</p>
//     </li>
// </div>
