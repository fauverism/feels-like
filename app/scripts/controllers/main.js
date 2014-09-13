'use strict';

/**
 * @ngdoc function
 * @name feelsLikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feelsLikeApp
 */
angular.module('feelsLikeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
