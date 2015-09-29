'use strict';
app.controller('loginController',
    function loginController($firebaseObject){
        var ref = new Firebase("https://sweltering-inferno-3169.firebaseio.com");
        // download the data into a local object
        var auth = $firebaseObject(ref);
        // test
        ref.authWithPassword({
            "email": "bobtony@firebase.com",
            "password": "correcthorsebatterystaple"
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });

    }
);