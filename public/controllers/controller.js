var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get("/contactlist").success(function(response) {
    	console.log("Got my requested data");
    	$scope.controller = response;
    });

    
}]);﻿