var app = angular.module("lexic");

var StaffSellCtrl = function($scope,$rootScope,$http) {

    $http.get('services/goodsAPI.php')
        .success(function(data){
           $scope.goods = data;
        });
    $http.get('services/bottlesAPI.php')
        .success(function(data){
            $scope.bottles = data;
        });

};

app.controller("StaffSellCtrl",StaffSellCtrl);