'use strict';

angular.module('feelsLikeApp')
  .controller('weatherCtrl', ['$scope', '$http', 'Restangular', 'weatherService', function($scope, $http, weatherService) {
    var app = this;

    weatherService.getWeatherInfo()
      .then(function(weatherInfo) {
        console.log(weatherInfo);
        app.weatherInfo = weatherInfo;
      });

    $scope.submitWeather = function() {

    weatherService.postWeatherInfo()
      .then(function(weatherData) {
        console.log(weatherData);
        app.weatherData = weatherData;
      });

    };
  }]);