	var validationApp = angular.module('validationApp', []);

	validationApp.controller('mainController', function($scope) {

		// submit function		
		$scope.submitForm = function() {
			if ($scope.userForm.$valid) {
				alert('Its ALIIIIIIVE!!1');
			}
		};

	});