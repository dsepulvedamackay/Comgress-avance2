(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController($http, $state) {
        var vm = this;

        activate();

        function activate() {
            $http.get('app/eventos.json').success(function(response) {
                angular.forEach(response.eventos, function(evento) {
                  if (evento.id == $state.params.eventoId) {
                    vm.evento = evento;
                  }
                });
            });
        }

        vm.botonAtras = function() {
          $state.go('eventos');
        }
    }
})();
