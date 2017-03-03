var validationApp = angular.module("validationApp", []);

validationApp.controller("mainController", function($scope) {
    
    "use strict";
        
    $scope.users = [
        {
            name : "Denis",
            username : "forxtu",
            email : "for@gmail.com",
            gender : "male"
        }
    ];
    
    
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
    

    $scope.userAdd = function() {
        $scope.users.push({contentName : $scope.user.name,
                          contentUserName : $scope.user.username,
                          contentEmail : $scope.user.email,
                          contentGender : $scope.user.gender
                          });
            
        $scope.user.name = "";
        $scope.user.username = "";
        $scope.user.email = "";
        $scope.user.gender = false;
    };
    
    
    $scope.deleteUser = function(user) {
        $scope.users = $scope.users.filter(function(d) {
            return d != user;
        });
    };
               

    // submit function not working cause of onclick
    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
            alert("New user added!");
        }
    };

});