validationApp.directive("onlyOneWord", function() {
    return {
        require: "ngModel",
        restrict: "A",
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.onlyOneWord = function(modelValue, viewValue) {
                if(modelValue && modelValue.split(" ").length == 1) {
                    return true;
                }
                else {
                    return false;
                }
            };
        }
    };
});