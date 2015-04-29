baseball.controller('PitchCtrl', function PitchCtrl($scope, BaseballFactory) {
  $scope.BaseballFactory = BaseballFactory;

  $scope.newgame = function() {
    BaseballFactory.strikes = 0;
    BaseballFactory.balls = 0;
    BaseballFactory.outs = 0;
    BaseballFactory.runs = 0;
    BaseballFactory.innings = 1;
    BaseballFactory.hits = 0;
    BaseballFactory.strikeouts = 0;
    BaseballFactory.firstbase = 0;
    BaseballFactory.secondbase = 0;
    BaseballFactory.thirdbase = 0;
    BaseballFactory.report = "";
    BaseballFactory.gameover = 0;

  }

  $scope.pitch = function(pitch) {
    var random = Math.random();
    var location = pitch;
    var call = 0;

      if (location === 0) { //pitch outside
        if (random < 0.039) { //SINGLE
            var call = 1;
        } else if (random < 0.051) { //DOUBLE
            var call = 2;
        } else if (random < 0.054) { //TRIPLE
            var call = 3;
        } else if (random < 0.060) { //HR
            var call = 4;
        } else if (random < 0.42) { //BALL
            var call = 5;
        } else if (random < 0.87) { //STRIKE
            var call = 6;
        } else { //FLY or GROUND-OUT
            var call = 7;
        }
      }
      else if (location === 1) { //pitch middle
        if (random < 0.049) { //SINGLE
            var call = 1;
        } else if (random < 0.071) { //DOUBLE
            var call = 2;
        } else if (random < 0.079) { //TRIPLE
            var call = 3;
        } else if (random < 0.080) { //HR
            var call = 4;
        } else if (random < 0.645) { //STRIKE
            var call = 6;
        } else { //FLY or GROUND-OUT
            var call = 7;
        }
      }
      else if (location === 2) { //pitch inside
        if (random < 0.01) { //HBP
            var call = 0;
        } else if (random < 0.049) { //SINGLE
            var call = 1;
        } else if (random < 0.061) { //DOUBLE
            var call = 2;
        } else if (random < 0.064) { //TRIPLE
            var call = 3;
        } else if (random < 0.070) { //HR
            var call = 4;
        } else if (random < 0.41) { //BALL
            var call = 5;
        } else if (random < 0.87) { //STRIKE
            var call = 6;
        } else { //FLY or GROUND-OUT
            var call = 7;
        }
      }

      console.log(call);

      if (call === 0) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.single();
        BaseballFactory.resetcount();
      } else if (call === 1) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.single();
        BaseballFactory.resetcount();
        BaseballFactory.hit();
      } else if (call === 2) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.double();
        BaseballFactory.resetcount();
        BaseballFactory.hit();
      } else if (call === 3) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.triple();
        BaseballFactory.resetcount();
        BaseballFactory.hit();
      } else if (call === 4) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.advancebaserunners();
        BaseballFactory.homerun();
        BaseballFactory.resetcount();
        BaseballFactory.hit();
      } else if (call === 5) {
        BaseballFactory.ball();
      } else if (call === 6) {
        BaseballFactory.strike();
      } else if (call === 7) {
        BaseballFactory.putout();
        BaseballFactory.resetcount();
      }

      if (BaseballFactory.outs >= 3) {
        BaseballFactory.endinning();
        BaseballFactory.resetbases();
        BaseballFactory.resetcount();
        BaseballFactory.outs = 0;
      }

      if (BaseballFactory.strikes >= 3) {
        BaseballFactory.putout();
        BaseballFactory.strikeout();
        BaseballFactory.resetcount();
      }

      if (BaseballFactory.balls >=4) {
        BaseballFactory.advancebaserunners();
        BaseballFactory.single();
        BaseballFactory.resetcount();
        BaseballFactory.report = "He walked him.";
      }

      if (BaseballFactory.innings > 9) {
        BaseballFactory.gameover = 1;
      }

    }

});
