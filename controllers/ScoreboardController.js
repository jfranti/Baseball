baseball.controller ('ScoreboardCtrl', function ScoreboardCtrl($scope, BaseballFactory) {
  $scope.BaseballFactory = BaseballFactory;
  $scope.runs_awayteam = BaseballFactory.runs;
  $scope.balls = BaseballFactory.balls;
  $scope.strikes = BaseballFactory.strikes;
  $scope.outs = BaseballFactory.outs;
  $scope.innings = BaseballFactory.innings;
  $scope.emptybase = BaseballFactory.emptybase;
  $scope.firstbase = BaseballFactory.firstbase;
  $scope.secondbase = BaseballFactory.secondbase;
  $scope.thirdbase = BaseballFactory.thirdbase;
  $scope.firstsecondbase = BaseballFactory.firstsecondbase;
  $scope.secondthirdbase = BaseballFactory.secondthirdbase;
  $scope.firstthirdbase = BaseballFactory.firstthirdbase;
  $scope.firstsecondthirdbase = BaseballFactory.firstsecondthirdbase;
  $scope.hits_awayteam = BaseballFactory.hits;
  $scope.hits_hometeam = BaseballFactory.hits;
  $scope.strikeouts_awayteam = BaseballFactory.strikeouts;
  $scope.strikeouts_hometeam = BaseballFactory.strikeouts;
  $scope.runs_hometeam = BaseballFactory.runs;
  $scope.atbat = BaseballFactory.atbat;

});
