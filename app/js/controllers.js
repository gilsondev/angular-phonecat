'use strict';

var phonecatApp = angular.module('phonecatApp', []);

/* Controllers */

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.name = "World";
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S',
            'age': 1
        },
        {
            'name': 'Motorola XOOM with Wi-fi',
            'snippet': 'The Next, Next Generation Tablet',
            'age': 2
        },
        {
            'name': 'Motorola XOOM',
            'snippet': 'The Next, Next Generation Tablet',
            'age': 3
        },
    ]

    $scope.orderProp = 'age';
});
