validationApp.controller('serviceController', ['$scope', 'hello', function($scope, hello) {

    $scope.sayHello = function() {
        hello.runFunc();
    }

}]);
