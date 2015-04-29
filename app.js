var baseball = angular.module('baseball', ['ui.router']);

baseball.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    views: {
      'scoreboard': {
        templateUrl: 'partials/scoreboard.html'
      },
      'home': {
        templateUrl: 'partials/home.html',
        controller: 'BaseballCtrl'
      }
    }
  });
