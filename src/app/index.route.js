(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('eventos', {
                url: "/eventos",
                templateUrl: "app/eventos/eventos.html",
                controller: 'EventosController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('evento', {
                url: "/evento/{eventoId}",
                templateUrl: "app/evento/evento.html",
                controller: 'EventoController',
                controllerAs: 'vm'
            });


        $urlRouterProvider.otherwise('/');
    }

})();
