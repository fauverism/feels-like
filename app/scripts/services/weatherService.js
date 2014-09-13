'use strict';

angular.module('feelsLikeApp')
  .factory('wuService', ['Restangular',
      function (Restangular) {
      // Now we have access to the Restangular
      // service our service
        var screener = Restangular.all('screener');
        console.log(this);
}]);