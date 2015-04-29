baseball.factory('BaseballFactory', function BaseballFactory() {
    var factory = {};

//SCOREBOARD DISPLAY
    factory.strike = 0;
    factory.ball = 0;
    factory.outs = 0;
    factory.runs = 0;
    factory.innings = 1;

//BASES
    factory.1stbase = 0;
    factory.2ndbase = 0;
    factory.3rdbase = 0;
    factory.home = 0;


    factory.strike = function () {
        factory.strike = (factory.strike + 1);
    }

    factory.ball = function() {
        factory.ball = (factory.ball + 1);
    }

    factory.out = function() {
        factory.outs = (factory.outs + 1);
    }

    factory.single = function() {
        factory.1stbase = 1;
    }

    factory.double = function() {
        factory.2ndbase = 1;
    }

    factory.triple = function() {
        factory.3rdbase = 1;
    }

    factory.homerun = function() {
        factory.1stbase = 0;
        factory.2ndbase = 0;
        factory.2ndbase = 0;
        factory.runs = (factory.runs + 1);
    }

    factory.advancebaserunners = function() {
        if (factory.3rdbase === 1) {
            factory.home = factory.home + 1;
            factory.3rdbase = 0;
        } 
)
    }

    factory.endinning = function() {

    }

});
