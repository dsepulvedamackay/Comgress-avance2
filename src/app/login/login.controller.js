(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($http, $uibModal) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
