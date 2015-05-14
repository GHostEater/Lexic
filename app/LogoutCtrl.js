var app = angular.module("lexic");

var LogoutCtrl = function($scope,$rootScope,$http) {
    $http.get('services/logout.php')
        .success(function(data){
            $scope.logout = data;
            if ($scope.logout.loggedout) {
                $rootScope.authenticated = 0;
                delete $rootScope.name;
            }
        });
};

app.controller("LogoutCtrl",LogoutCtrl);