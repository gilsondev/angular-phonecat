'use strict';

var phonecatApp = angular.module('phonecatApp', []);

/* Controllers */

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.name = "World";
    $scope.phones = [
        {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S'},
        {'name': 'Motorola XOOM with Wi-fi', 'snippet': 'The Next, Next Generation Tablet'},
        {'name': 'Motorola XOOM', 'snippet': 'The Next, Next Generation Tablet'},
    ]
});
