var baseball = angular.module('baseball', ['ui.router']);

baseball.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    views: {
      'scoreboard': {
        templateUrl: 'partials/scoreboard.html',
        controller: 'ScoreboardCtrl'
      },
      'home': {
        templateUrl: 'partials/home.html',
        controller: 'PitchCtrl'
      },
      'report': {
        templateUrl: 'partials/report.html',
        controller: 'ScoreboardCtrl'
      }
    }
  });
});
