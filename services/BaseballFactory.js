baseball.factory('BaseballFactory', function BaseballFactory() {
  var factory = {};

  //SCOREBOARD DISPLAY
  factory.strikes = 0;
  factory.balls = 0;
  factory.outs = 0;
  factory.runs_hometeam = 0;
  factory.runs_awayteam = 0;
  factory.innings = 1;
  factory.hits_hometeam = 0;
  factory.hits_awayteam = 0;
  factory.strikeouts_hometeam = 0;
  factory.strikeouts_awayteam = 0;
  factory.hometeam = "Brewers";
  factory.awayteam = "Blue Jays";
  factory.inningouts = 0;
  factory.home_pitchcount = 0;
  factory.away_pitchcount = 0;

  //BASES
  factory.emptybase = 1;
  factory.firstbase = 0;
  factory.secondbase = 0;
  factory.thirdbase = 0;
  factory.firstsecondbase = 0;
  factory.secondthirdbase = 0;
  factory.firstthirdbase = 0;
  factory.firstsecondthirdbase = 0;


  //REPORT
  factory.report = "PLAY BALL!";
  factory.gameover = 0;
  factory.atbat = "AWAY";


  factory.strike = function () {
    factory.strikes = (factory.strikes + 1);
    factory.report = "STRIKE!";
  };

  factory.ball = function() {
    factory.balls = (factory.balls + 1);
    factory.report = "BALL!";
  };

  factory.putout = function() {
    factory.outs = (factory.outs + 1);
    factory.report = "FLY OUT!";
    factory.inningouts = (factory.inningouts + 1);
  };

  factory.single = function() {
    factory.firstbase = 1;
    factory.report = "A SINGLE!";
  };

  factory.double = function() {
    factory.secondbase = 1;
    factory.report = "HE HITS A DOUBLE!";
  };

  factory.triple = function() {
    factory.thirdbase = 1;
    factory.report = "WHOA NELLY! A TRIPLE!";
  };

  factory.homerun_home = function() {
    factory.firstbase = 0;
    factory.secondbase = 0;
    factory.thirdbase = 0;
    factory.runs_hometeam = (factory.runs_hometeam + 1);
    factory.report = "GET UP! GET UP! GET OUTTA HERE AND GONE!!";
  };

  factory.homerun_away = function() {
    factory.firstbase = 0;
    factory.secondbase = 0;
    factory.thirdbase = 0;
    factory.runs_awayteam = (factory.runs_awayteam + 1);
    factory.report = "GET UP! GET UP! GET OUTTA HERE AND GONE!!";
  };

  factory.resetcount = function() {
    factory.strikes = 0;
    factory.balls = 0;
  }

  factory.resetbases = function() {
    factory.firstbase = 0;
    factory.secondbase = 0;
    factory.thirdbase = 0;
    factory.firstsecondbase = 0;
    factory.secondthirdbase = 0;
    factory.firstthirdbase = 0;
    factory.firstsecondthirdbase = 0;

  }

  factory.strikeout_home = function() {
    factory.strikeouts_hometeam = (factory.strikeouts_hometeam + 1);
    factory.report = "HEEEE-EE-EE STRUCK HIM OUT!";
  }

  factory.strikeout_away = function() {
    factory.strikeouts_awayteam = (factory.strikeouts_awayteam + 1);
    factory.report = "HE GOES DOWN ON STRIKES.";
  }

  factory.hit_home = function() {
    factory.hits_hometeam = (factory.hits_hometeam + 1);
  }

  factory.hit_away = function() {
    factory.hits_awayteam = (factory.hits_awayteam + 1);
  }

  factory.advancebaserunners_home = function() {
    if (factory.thirdbase === 1) {
      factory.runs_hometeam = factory.runs_hometeam + 1;
      factory.thirdbase = 0;
    };
    if (factory.secondbase === 1) {
      factory.thirdbase = 1;
      factory.secondbase = 0;
    };
    if (factory.firstbase === 1) {
      factory.secondbase = 1;
      factory.firstbase = 0;
    };
  };

  factory.advancebaserunners_away = function() {
    if (factory.thirdbase === 1) {
      factory.runs_awayteam = factory.runs_awayteam + 1;
      factory.thirdbase = 0;
    };
    if (factory.secondbase === 1) {
      factory.thirdbase = 1;
      factory.secondbase = 0;
    };
    if (factory.firstbase === 1) {
      factory.secondbase = 1;
      factory.firstbase = 0;
    };
  };

  factory.endinning = function() {
    factory.innings = factory.innings + 1;
    factory.outs = 0;
  };

  factory.homehalf = function() {
    factory.atbat = "HOME";
    alert ("AWAY TEAM PITCHER");
  }

  factory.awayhalf = function() {
    factory.atbat = "AWAY";
    alert ("HOME TEAM PITCHER");
  }

  return factory;

});
