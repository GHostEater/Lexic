var app = angular.module("lexic");

var LoginCtrl = function($scope,$http,$rootScope,$upload,$location){

    $scope.formSelect = 0;

    $scope.formSelectStaff = function(){
        $scope.formSelect = 1;
    };
    $scope.formSelectAdmin = function(){
        $scope.formSelect = 2;
    };
    $scope.formSelectCancel = function(){
        $scope.formSelect = 0;
    };

    $scope.submitAdmin = function(){
        $upload.upload({
            url: "services/loginAdmin.php",
            method: 'POST',
            fields: {
                'username':$scope.admin.username,
                'password':$scope.admin.password
            }
        })
            .success(function(data){
               $rootScope.name = data.name;
                $rootScope.error = data.error;
                if ($rootScope.name){
                    $rootScope.authenticated = 1;
                    delete $rootScope.error;
                    $location.url('/admin/home');
                }
                else if($rootScope.error){
                    $rootScope.authenticated = 0;
                }
            });
    };
    $scope.submitStaff = function(){
        $upload.upload({
            url: 'services/loginStaff.php',
            method: 'POST',
            fields: {
                'username':$scope.staff.username,
                'password':$scope.staff.password
            }
        })
            .success(function(data){
                $rootScope.name = data.name;
                $rootScope.error = data.error;
                if ($rootScope.name){
                    $rootScope.authenticated = 1;
                    delete $rootScope.error;
                    $location.url('/staff/home');
                }
                else if($rootScope.error){
                    $rootScope.authenticated = 0;
                }
            });
    };
};

app.controller("LoginCtrl",LoginCtrl);