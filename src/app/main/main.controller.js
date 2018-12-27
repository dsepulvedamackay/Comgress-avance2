(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope, $rootScope) {
      var vm = this;
    }
})();
