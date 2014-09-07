(function(){
  'use strict';
  var REST_ENDPOINT = "http://avantika-staging.herokuapp.com/api/";
  var avantika = angular.module('avantika',
    ['ngRoute','angular-carousel', 'duScroll']);


  avantika.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
      $routeProvider
        .when('/landing', {
          templateUrl: '/partials/home.html',
          controller: 'HomeCtrl'
        })
        .when('/designers', {
            templateUrl: '/partials/designer-list.html',
            controller:   'DesignerListCtrl'
        })
        .otherwise({
          redirectTo: '/landing'
        });
    }
  ]);

  /*controllers*/
  avantika.controller('HomeCtrl', function($scope){
      $scope.featuredImages = [
        {
          'url':'/images/featured-item-1.jpg'
        },
        {
          'url':'/images/featured-item-2.jpg'
        },
        {
          'url':'/images/featured-item-3.jpg'
        }
      ];

  })
  .controller('DesignerListCtrl', function($scope, $http){
    $http({
      method: 'GET',
      url: REST_ENDPOINT+'products'
    })
    .success(function(data, status, header, config){
      console.log(data);
      console.log(status);
      console.log(header);
      console.log(config);
    })
    .error(function(data, status, header, config){
      console.log(data);
      console.log(status);
      console.log(header);
      console.log(config);
    });
  });

})();
