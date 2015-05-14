angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', '$window', '$state', function(scope, w, state) {
    scope.tablet = w.innerWidth >= 768 || w.innerHeight >= 768;

    scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        scope.sideMenuBase = state.includes("menu.base.*"); 
    });
}])

.controller('HomeCtrl', ['$scope', '$location', function(scope, loc) {
    
}]);

