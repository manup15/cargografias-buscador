'use strict';

angular.module('myApp.view6', ['ngRoute','ngMaterial','leaflet-directive'])

.config(['$routeProvider','$logProvider', function($routeProvider,$logProvider) {
  $logProvider.debugEnabled(false);

  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])


.controller('View6Ctrl', ['$scope', function($scope){
    // var today = new Date();
    // console.log(today);
    // $scope.search6 = function(){
    //   $scope.remainsInPower = " "
    //   var url = "https://quienesquienapi.herokuapp.com/v1/memberships?person_id=/" + $scope.keywords6 + "/i&start_date%3E1969-10-12&start_date%3C2017-10-12&limit=25&offset=0"
    //
    //   httpRequest(url,function(response6){
    //     // console.log(response6.data[0])
    //     $scope.response6 = response6.data
    //     go()
    //   })
    //
    //   //visualization
    //   // $scope.go = function() {
    //     function go() {
    //     for (var i = 0; i < $scope.response6.length; i++) {
    //       console.log($scope.response6[0]);
    //       // console.log($scope.response6.data[i].end_date);
    //       var remainsInPower = $scope.response6[i].end_date.indexOf("2011");
    //       if(remainsInPower != -1) {
    //         console.log("ESTA EN EL PODER");
    //         $scope.remainsInPower = "SI"
    //         break
    //       }else{
    //         $scope.remainsInPower = " "
    //       }
    //     }
    //   }//end visualization
    //
    // }


    var vm = this;
    vm.selectedItemChange = selectedItemChange;
    vm.result = '[]';
    vm.searchTextChange = searchTextChange;
    vm.throttle = 300;


    function selectedItemChange(item) {
      console.log("item");
      console.log(item);
          vm.result = item.nombre

    }

    function searchTextChange(query) {
        var url = "https://quienesquienapi.herokuapp.com/v1/persons?name=/" + query + "/i"

        httpRequest(url, function(response) {
          console.log(response);
                vm.items =
                    response.data.map(function(item) {
                        return {
                            nombre: item.simple
                        };
                    }) || [];


            })

            $scope.power = function(nombre) {
              console.log("power");
              console.log(nombre);
              var url = "https://quienesquienapi.herokuapp.com/v1/memberships?person=/" + nombre + "/i&start_date%3E1969-10-12&start_date%3C2017-10-12&limit=25&offset=0"
              console.log(url);
                httpRequest(url,function(response){
                  for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].end_date);
                    var remainsInPower = response.data[i].end_date.indexOf("2011");
                    if(remainsInPower != -1) {
                      console.log("ESTA EN EL PODER");
                      $scope.remainsInPower = "SI"
                      break
                    }else{
                      $scope.remainsInPower = "NO"
                    }
                  }
                })
              }



    }

    $scope.go = function(){
      console.log("hola" );
    }
}]);
