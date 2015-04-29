baseball.controller ('ScoreboardCtrl', function ScoreboardCtrl($scope, BaseballFactory) {
    $scope.BaseballFactory = BaseballFactory;
    $scope.runs = BaseballFactory.runs;
    $scope.balls = BaseballFactory.balls;
    $scope.strikes = BaseballFactory.strikes;
    $scope.outs = BaseballFactory.outs;
    $scope.innings = BaseballFactory.innings;
    $scope.firstbase = BaseballFactory.firstbase;
    $scope.secondbase = BaseballFactory.secondbase;
    $scope.thirdbase = BaseballFactory.thirdbase;
    $scope.striekouts = BaseballFactory.strikeouts;
    $scope.hits = BaseballFactory.hits;

});
