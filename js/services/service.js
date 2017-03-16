validationApp.factory('hello', ['$timeout', function($timeout) {
    return {
        hello: function() {
            alert ('hello! timeout 3333');
        },
        runFunc: function() {
            $timeout(this.hello, 3333);
        }
    };
}]);
