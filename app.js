var baseball = angular.module('baseball', ['ui.router']);

baseball.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: '',
    views: {
      'scoreboard': {
        templateUrl: 'partials/scoreboard.html',
        controller: 'ScoreboardCtrl'
      },
      'home': {
        templateUrl: 'partials/home.html',
        controller: 'PitchCtrl'
      }
    }
  });
