(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController($http, $uibModal) {
        var vm = this;
        vm.options = {
            templateUrl: "app/evento/crearEvento.html"  
        }
        vm.openModal = function() {
            $uibModal.open(vm.options);
        }

        activate();

        function activate() {
            $http.get('app/eventos.json').success(function(response) {
                vm.eventos = response.eventos;
                console.log(vm.eventos);
                
            });
        }
    }
})();