"use strict";angular.module("yapApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html"}).state("feedback",{url:"/feedback",templateUrl:"views/feedback.html"}).state("about",{url:"/about",templateUrl:"views/about.html"})}]),angular.module("yapApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yapApp").controller("CookieCheckCtrl",["$scope",function(a){a.areCookiesEnabled=!1,document.cookie="__testCookies=x";var b=document.cookie.length;console.log("oldLength",b),document.cookie="__testCookies=xx";var c=document.cookie.length;console.log("newLength",c),c===b+1&&(a.areCookiesEnabled=!0)}]),angular.module("yapApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return console.log("loc",a),a===b.path()}}]),angular.module("yapApp").controller("ErrorFeedbackCtrl",["$scope","ErrorsService",function(a,b){a.errors=b.errors()}]),angular.module("yapApp").controller("FeedbackCtrl",["$scope","ErrorsService",function(a,b){a.generateError=function(){console.log("generating an error..."),b.add({message:"this is a new error..."})}}]),angular.module("yapApp").factory("ErrorsService",function(){var a=[];return{add:function(b){a.push(b)},errors:function(){return a},clear:function(){a=[]}}});