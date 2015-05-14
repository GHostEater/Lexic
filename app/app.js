var app = angular.module("lexic",['ngRoute','ngSanitize','ngAnimate','angularFileUpload','ui.tinymce']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'app/home.html',
          controller: 'HomeCtrl'
        })
      .when('/login', {
          templateUrl: 'app/login.html',
          controller: 'LoginCtrl'
      })
      .when('/logout', {
          templateUrl: 'app/logout.html',
          controller: 'LogoutCtrl'
      })
      .otherwise({
          redirectTo: '/login'
      });
}])
    .run(function($rootScope,$http,$location){
        $rootScope.menu = 1;

        $rootScope.menuToggle = function (){
            var i;
            if ($rootScope.menu === 1) i = 1;
            if ($rootScope.menu === 0) i = 0;

            if (i === 1){
                $rootScope.menu = 0;
            }
            else if (i === 0){
                $rootScope.menu = 1;
            }
        };
    $http.get('services/session.php')
        .success(function(data){
            if(data.name){
                $rootScope.name = data.name;
                $rootScope.authenticated = 1;
            }
            else{
                $rootScope.authenticated = 0;
                $location.url('/login');
            }
        })
});