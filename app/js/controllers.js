'use strict';

var phonecatApp = angular.module('phonecatApp', []);

/* Controllers */

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});
