baseball.factory('BaseballFactory', function BaseballFactory() {
    var factory = {};

//SCOREBOARD DISPLAY
    factory.strikes = 0;
    factory.balls = 0;
    factory.outs = 0;
    factory.runs = 0;
    factory.innings = 1;
    factory.hits = 0;
    factory.strikeouts = 0;
    factory.hometeam = "Brewers";

//BASES
    factory.firstbase = 0;
    factory.secondbase = 0;
    factory.thirdbase = 0;

//REPORT
    factory.report = "";
    factory.gameover = 0;


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

    factory.homerun = function() {
        factory.firstbase = 0;
        factory.secondbase = 0;
        factory.thirdbase = 0;
        factory.runs = (factory.runs + 1);
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
    }

    factory.strikeout = function() {
      factory.strikeouts = (factory.strikeouts + 1);
      factory.report = "HEEEE-EE-EE STRUCK HIM OUT!";
    }

    factory.hit = function() {
      factory.hits = (factory.hits + 1);
    }



    factory.advancebaserunners = function() {
        if (factory.thirdbase === 1) {
            factory.runs = factory.runs + 1;
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

    return factory;

});
