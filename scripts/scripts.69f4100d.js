"use strict";angular.module("yapApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/stuffs",{templateUrl:"views/stuffs.html",controller:"StuffsCtrl"}).when("/stuffs2",{templateUrl:"views/stuffs2.html",controller:"Stuffs2Ctrl"}).when("/stuffs3",{templateUrl:"views/test.html",controller:"TestCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yapApp").controller("MainCtrl",["$scope","$cookieStore",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Other Stuff"],a.areCookiesEnabled=!1,b.put("_testCookies","123");var c=b.get("_testCookies");c&&(b.remove("_testCookies"),a.areCookiesEnabled=!0)}]),angular.module("yapApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yapApp").controller("StuffsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yapApp").controller("TestCtrl",["$scope",function(a){a.test="hi, 42"}]),angular.module("yapApp").controller("Stuffs2Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yapApp").controller("CookieCheckCtrl",["$scope",function(a){a.areCookiesEnabled=!1,document.cookie="__testCookies=x";var b=document.cookie.length;console.log("oldLength",b),document.cookie="__testCookies=xx";var c=document.cookie.length;console.log("newLength",c),c===b+1&&(a.areCookiesEnabled=!0)}]);