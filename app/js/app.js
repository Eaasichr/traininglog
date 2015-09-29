'use strict';
var app = angular.module('app',['ngRoute', 'firebase']);
app.config(['$routeProvider', function($routeProvider, firebaseService, $scope){

    $routeProvider.
        when('/addWorkout', {
            templateUrl: '/app/templates/addWorkout.html',
            controller: 'createWorkoutController',
            resolve: authentication
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

app.user = null;
app.ref = null;
app.auth = null;
// when the dom is ready, so we sure we can bootstrap angular manually
angular.element(document).ready(function ($firebaseObject) {
    app.ref = new Firebase("https://sweltering-inferno-3169.firebaseio.com");
    app.auth = new $firebaseObject(app.ref, function (error, user) {
        app.user = user;
        angular.bootstrap(document, ['myapp']);
    });
});
// this object is needed when we want to authenticate somewhere in our application with the use of resolve
var authentication = {
    app: function ($q, $location) {
        var deferred = $q.defer();

        // go to the dashboard when the user is logged in
        if (app.user != null) {
            $location.path("/addWorkout");
            deferred.resolve(app.user);
        } else {
            // go to the login form when the user is logged logged out, or never had logged in
            $location.path("/login");
            deferred.resolve(null);
        }
        return deferred.promise;
    }
}