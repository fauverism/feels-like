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
    .config(function ($routeProvider, $httpProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        /*Help Modal is in the ModalService*/
        .otherwise({
          redirectTo: '/'
        });
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });