!function(){"use strict";var a=angular.module("avantika",["ngRoute","angular-carousel","duScroll"]);a.config(["$routeProvider","$locationProvider",function(a,b){a.when("/landing",{templateUrl:"/partials/home.html",controller:"HomeCtrl"}).when("/dresses",{templateUrl:"/partials/product-list.html",controller:"ProductCtrl"}).when("/designers",{templateUrl:"/partials/designer-list.html",controller:"DesignerListCtrl"}).otherwise({redirectTo:"/landing"})}]),a.controller("HomeCtrl",["$scope",function(a){a.featuredImages=[{url:"/images/featured-item-1.jpg"},{url:"/images/featured-item-2.jpg"},{url:"/images/featured-item-3.jpg"}]}]).controller("ProductCtrl",["$scope","$document",function(a,b){b.scrollTop(0,0)}]).controller("DesignerListCtrl",["$scope","$document",function(a,b){$document.scrollTop(0,0)}])}();