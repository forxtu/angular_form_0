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
        
    
    $scope.deleteUser = function(user) {
        $scope.users = $scope.users.filter(function(d) {
            return d != user;
        });
    };
               

    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
            $scope.users.push($scope.user);
            $scope.user = {};
            $scope.userForm.$setUntouched(true);
        }
    };

});