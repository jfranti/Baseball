baseball.factory('BaseballFactory', function BaseballFactory() {
    var factory = {};

    factory.strike = 0;
    factory.ball = 0;
    factory.outs = 0;
    factory.runs = 0;

    factory.1stbase = 0;
    factory.2ndbase = 0;
    factory.3rdbase = 0;
    factory.home = 0;


    factory.strike = function () {
        if (factory.strike < 2) {
            factory.strike = (factory.strike + 1);
        } else if (factory.outs < 2){
            factory.outs = (factory.outs + 1);
        } else {
            factory.innings = (factory.innings + 1);
        }
    }

    factory.ball = function() {

    }

    factory.hitbypitch = function() {

    }

    factory.out = function() {

    }

    factory.single = function() {

    }

    factory.double = function() {

    }

    factory.triple = function() {

    }

    factory.homerun = function() {

    }

    factory.advancebaserunners = function() {

    }

});
