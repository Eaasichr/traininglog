'use strict';

//var app = angular.module('app', ['ngRoute'])
//    .config(function ($routeProvider) {
//        $routeProvider.when('/addWorkout',{
//            templateUrl: '/app/templates/addWorkout.html',
//            controller: 'createWorkoutController'
//        });
//        $routeProvider.when('/trainingDetails', {
//            templateUrl: '/app/templates/trainingDetails.html',
//            controller: 'trainingController'
//        });
//        $routeProvider.otherwise({redirectTo: '/trainingDetails'});
//    });

var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/addWorkout', {
            templateUrl: '/app/templates/addWorkout.html',
            controller: 'createWorkoutController'
        }).
        when('/trainingDetails', {
            templateUrl: '/app/templates/trainingDetails.html',
            controller: 'trainingController'
        }).
        when('/login', {
            templateUrl: '/app/templates/login.html',
            controller: 'loginController'
        }).otherwise({redirectTo: '/login'});
}]).run(['$rootScope', '$location', function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal, oldVal){
        $rootScope.activetab = newVal;
    });
}]);