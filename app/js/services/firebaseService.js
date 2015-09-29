'use strict';

app.factory('firebaseService',
    function($scope, $firebaseObject) {
        var ref = new Firebase("https://sweltering-inferno-3169.firebaseio.com");
        // download the data into a local object
        //var auth = $firebaseObject(ref);
        //var Auth = {
        //    user: function(){
        //        return "test";
        //    }
        //}
        $scope.test = function(){
            console.log("test");
        }
    });