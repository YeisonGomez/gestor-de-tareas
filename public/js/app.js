'use strict';

var app = angular.module('nombre_app', ['ngRoute', 'route-segment', 'view-segment']);

app.config(['$routeSegmentProvider', '$routeProvider', function($routeSegmentProvider, $routeProvider) {

  $routeSegmentProvider.

  when('/task', 'list').


  segment('list', {
    templateUrl: 'app/listwork/view.html',
    controller: 'listworkCtrl'
  });


}]);
