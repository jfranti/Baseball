var pitch = function(choice) {
    var pitches = choice;
    var random = Math.random();
    var call = 0;
    var balls = 0;
    var strikes = 0;
    var outs = 0;
    var runs = 0;
    var base = 0;
    var pitchcount = [balls, strikes];

//Pitches and Outcomes
        if (pitches === 0) { //pitch outside
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
        else if (pitches === 1) { //pitch middle
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
        else if (pitches === 2) { //pitch inside
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
        return call;
    };


$(document).ready(function() {
  $('form#outside').submit(function(event) {
      var call = pitch(choice);


      $('.call').text(call);

    $('#result').show();
    event.preventDefault();
  });
});
