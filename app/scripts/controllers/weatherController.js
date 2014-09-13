'use strict';

angular.module('feelsLikeApp')
    .controller('weatherCtrl', ['$scope', '$http', 'Restangular', 'wuService', function($scope, $http, wuService) {

    var self = this;

    $http.get('http://api.wunderground.com/api/d029755bddbad42d/conditions/q/NJ/Moorestown.json')
      .success(function(data) {
        console.log('data ' + data);
        $scope.full = data.current_observation.display_location.full;
        $scope.weather = data.current_observation.weather;
        $scope.temperature_string = data.current_observation.temperature_string;
        $scope.feelslike_string = data.current_observation.feelslike_string;
        $scope.UV = data.current_observation.UV;
        $scope.dewpoint_string = data.current_observation.dewpoint_string;
        $scope.relative_humidity = data.current_observation.relative_humidity;
        $scope.resultGet = result;
      })
      .error(function($log) {
        $log(this);
        console.log($log(this));
      });

      $scope.post = function(value) {
        $http.post("http://0.0.0.0/#/", { 'full': value })
          .success(function(result) {
            console.log(result);
            $scope.resultPost = result;
          })
          .error(function() {
            console.log("error");
          });
      };

    }]);