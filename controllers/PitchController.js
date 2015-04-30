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
    BaseballFactory.home_pitchcount = 0;
    BaseballFactory.away_pitchcount = 0;

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
      } else if (random < 0.45) { //BALL
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
      } else if (random < 0.089) { //HR
        var call = 4;
      } else if (random < 0.40) { //BALL
        var call = 5;
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
      } else if (random < 0.45) { //BALL
        var call = 5;
      } else if (random < 0.87) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 3) { //pitch middle
      if (random < 0.049) { //SINGLE
        var call = 1;
      } else if (random < 0.071) { //DOUBLE
        var call = 2;
      } else if (random < 0.079) { //TRIPLE
        var call = 3;
      } else if (random < 0.089) { //HR
        var call = 4;
      } else if (random < 0.40) { //BALL
        var call = 5;
      } else if (random < 0.645) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 4) { //pitch middle
      if (random < 0.049) { //SINGLE
        var call = 1;
      } else if (random < 0.071) { //DOUBLE
        var call = 2;
      } else if (random < 0.079) { //TRIPLE
        var call = 3;
      } else if (random < 0.089) { //HR
        var call = 4;
      } else if (random < 0.40) { //BALL
        var call = 5;
      } else if (random < 0.645) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }


    if (BaseballFactory.atbat === "AWAY") { //AWAY HALF OF INNING
      BaseballFactory.home_pitchcount = (BaseballFactory.home_pitchcount + 1)
      if (call === 0) {
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.single();
        BaseballFactory.resetcount();
      } else if (call === 1) {
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.single();
        BaseballFactory.resetcount();
        BaseballFactory.hit_away();
      } else if (call === 2) {
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.double();
        BaseballFactory.resetcount();
        BaseballFactory.hit_away();
      } else if (call === 3) {
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.advancebaserunners_away();
        BaseballFactory.triple();
        BaseballFactory.resetcount();
        BaseballFactory.hit_away();
      } else if (call === 4) {
        if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)) {
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.homerun_away();
          BaseballFactory.resetcount();
          BaseballFactory.hit_away();
          BaseballFactory.report = "A GRAND SLAM!";
        } else {
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.homerun_away();
          BaseballFactory.resetcount();
          BaseballFactory.hit_away();
        }
      } else if (call === 5) {
        BaseballFactory.ball();
      } else if (call === 6) {
        BaseballFactory.strike();
      } else if (call === 7) {
        BaseballFactory.putout();
        BaseballFactory.resetcount();
      }
      if (BaseballFactory.strikes >= 3) { //STRIKEOUT
        BaseballFactory.putout();
        BaseballFactory.strikeout_home();
        BaseballFactory.resetcount();
      }

      if (BaseballFactory.balls >=4) { //WALK
        if (BaseballFactory.firstbase === 0) {
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked him.";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 0)){
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked him with a man on.";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 0)){
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked the bases LOADED!";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 1)){
          BaseballFactory.firstbase = 1;
          BaseballFactory.secondbase = 1;
          BaseballFactory.thirdbase = 1;
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked the bases LOADED!";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)){
          BaseballFactory.advancebaserunners_away();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked in a RUN!";
        }
      } //END AWAY HALF

    } else if (BaseballFactory.atbat === "HOME") { //HOME HALF OF INNING
      BaseballFactory.away_pitchcount = (BaseballFactory.away_pitchcount + 1)
      if (call === 0) {
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.single();
        BaseballFactory.resetcount();
      } else if (call === 1) {
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.single();
        BaseballFactory.resetcount();
        BaseballFactory.hit_home();
      } else if (call === 2) {
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.double();
        BaseballFactory.resetcount();
        BaseballFactory.hit_home();
      } else if (call === 3) {
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.advancebaserunners_home();
        BaseballFactory.triple();
        BaseballFactory.resetcount();
        BaseballFactory.hit_home();
      } else if (call === 4) {
        if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)) {
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.homerun_home();
          BaseballFactory.resetcount();
          BaseballFactory.hit_home();
          BaseballFactory.report = "A GRAND SLAM!";
        } else {
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.homerun_home();
          BaseballFactory.resetcount();
          BaseballFactory.hit_home();
        }
      } else if (call === 5) {
        BaseballFactory.ball();
      } else if (call === 6) {
        BaseballFactory.strike();
      } else if (call === 7) {
        BaseballFactory.putout();
        BaseballFactory.resetcount();
      }

      if (BaseballFactory.strikes >= 3) { //STRIKEOUT
        BaseballFactory.putout();
        BaseballFactory.strikeout_away();
        BaseballFactory.resetcount();
      }

      if (BaseballFactory.balls >=4) { //WALK
        if (BaseballFactory.firstbase === 0) {
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked him.";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 0)){
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked him with a man on.";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 0)){
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked the bases LOADED!";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 1)){
          BaseballFactory.firstbase = 1;
          BaseballFactory.secondbase = 1;
          BaseballFactory.thirdbase = 1;
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked the bases LOADED!";
        } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)){
          BaseballFactory.advancebaserunners_home();
          BaseballFactory.single();
          BaseballFactory.resetcount();
          BaseballFactory.report = "He walked in a RUN!";
        }


        BaseballFactory.advancebaserunners_home();
        BaseballFactory.single();
        BaseballFactory.resetcount();
        BaseballFactory.report = "He walked him.";
      }
    } //END HOME HALF

    if ((BaseballFactory.inningouts === 3) && (BaseballFactory.atbat === "AWAY")) { //END OF HALF INNING
      BaseballFactory.homehalf();
      BaseballFactory.resetbases();
      BaseballFactory.resetcount();
      BaseballFactory.outs = 0;
      BaseballFactory.emptybase = 1;
    }

    if (BaseballFactory.inningouts >= 6) { //END OF INNING
      BaseballFactory.endinning();
      BaseballFactory.awayhalf();
      BaseballFactory.resetbases();
      BaseballFactory.inningouts = 0;
      BaseballFactory.emptybase = 1;
    }

    if (BaseballFactory.innings > 9) { //END OF GAME
      BaseballFactory.gameover = 1;
    }

    if ((BaseballFactory.firstbase != 0) || (BaseballFactory.secondbase != 0) || (BaseballFactory.thirdbase != 0)) {
      BaseballFactory.emptybase = 0;
    }

    BaseballFactory.firstsecondbase = 0;
    BaseballFactory.secondthirdbase = 0;
    BaseballFactory.firstthirdbase = 0;
    BaseballFactory.firstsecondthirdbase = 0;

    if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 0)) {
      BaseballFactory.firstsecondbase = 1;
    } else if ((BaseballFactory.firstbase === 0) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)) {
      BaseballFactory.secondthirdbase = 1;
    } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 1)) {
      BaseballFactory.firstthirdbase = 1;
    } else if ((BaseballFactory.firstbase === 1) && (BaseballFactory.secondbase === 1) && (BaseballFactory.thirdbase === 1)) {
      BaseballFactory.firstsecondthirdbase = 1;
    } else if ((BaseballFactory.firstbase === 0) && (BaseballFactory.secondbase === 0) && (BaseballFactory.thirdbase === 0)) {
      BaseballFactory.emptybase = 1;
    }
  }



});
