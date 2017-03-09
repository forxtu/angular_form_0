validationApp.directive("userInfo", function(){
    return{
        restrict: "E",
        template: ['<div class="all_users">',                        
                        '<p ng-bind="user.name"></p>',
                        '<p ng-bind="user.username"></p>',
                        '<p ng-bind="user.email"></p>',
                        '<p ng-bind="user.gender"></p>',
                                
                        '<a class="delete_btn" href="#" ng-click="deleteUser(user)">x</a>',                           
                   '</div>'
                   ].join(""),
        
        link: function(scope, element, attr){
            
        }
    }
});