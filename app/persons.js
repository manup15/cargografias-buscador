(function() {
    'use strict';
    angular
    .module('myApp', ['ngMaterial','leaflet-directive'])
    .controller('DemoCtrl', DemoCtrl)
    .config(function ($logProvider) {
      $logProvider.debugEnabled(false);
    });

    function DemoCtrl($http) {
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
    }
})();
