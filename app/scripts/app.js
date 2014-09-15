'use strict';

/**
 * @ngdoc overview
 * @name feelsLikeApp
 * @description
 * # feelsLikeApp
 *
 * Main module of the application.
 */
angular
  .module('feelsLikeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($httpProvider, RestangularProvider, $routeProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    RestangularProvider.setBaseUrl('http://api.wunderground.com/api/d029755bddbad42d/conditions/q/NJ/Moorestown.json');

    RestangularProvider.setRequestInterceptor(
      function(elem, operation, what) {
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      });

    console.log(this);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      /*Help Modal is in the ModalService*/
      .otherwise({
        redirectTo: '/'
      });

  });