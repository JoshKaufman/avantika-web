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
        .when('/dresses', {
          templateUrl: '/partials/product-list.html',
          controller: 'ProductCtrl'
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
  avantika.controller('HomeCtrl', ['$scope', function($scope){
      //$document.scrollTop(0, 0);
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

  }])
  .controller('ProductCtrl', function($scope, $document) {
      $document.scrollTop(0, 0);
  })
  .controller('DesignerListCtrl', function($scope, $http){
      $document.scrollTop(0, 0);
  });

})();
