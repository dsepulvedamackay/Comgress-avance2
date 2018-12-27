(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .directive('leftPanel', leftPanel);

    /** @ngInject */
    function leftPanel() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/leftpanel/leftpanel.html',
            scope: {
                creationDate: '='
            },
            controller: LeftPanelController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function LeftPanelController($scope, $rootScope) {
            var vm = this;
            vm.labelmp25 = ["","ICAP MP 2,5"];
            vm.labelmp10 = ["","ICAP MP 10"];
            vm.colours = ['#FFCCBC', '#FF5722', '#717984', '#F1C40F'];
            vm.selectedData;
            vm.maxICAP = 500;
            vm.mp25 = [vm.maxICAP, 0];
            vm.mp10 = [vm.maxICAP, 0];
            vm.kong = [vm.maxICAP, 0];

            activate();

            function activate() {
              $rootScope.$on('mapClicked', function(event, dato) {
                vm.selectedData = dato;
                vm.mp25[1] = vm.selectedData.mp25ICAP;
                vm.mp25[0] = vm.maxICAP - vm.selectedData.mp25ICAP;
                vm.mp10[1] = vm.selectedData.mp10ICAP;
                vm.mp10[0] = vm.maxICAP - vm.selectedData.mp10ICAP;
                vm.kong[1] = vm.selectedData.kong;
                vm.kong[0] = vm.maxICAP - vm.selectedData.kong;
                $scope.$apply();
              });
            }
        }
    }

})();
