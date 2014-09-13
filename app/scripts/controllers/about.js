'use strict';

/**
 * @ngdoc function
 * @name feelsLikeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feelsLikeApp
 */
angular.module('feelsLikeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
