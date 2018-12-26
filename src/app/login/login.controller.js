(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($http, $state) {
        var vm = this;
        vm.autenticado = true;

        console.log($state);
        vm.autenticar = function() {
          if (vm.usuario == "user" && vm.contrasena == "password") {
            vm.autenticado = true;
            $state.go("home");
          } else {
            vm.autenticado = false;
          }
        }
    }
})();
