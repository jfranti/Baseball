    if (location === 0) { //pitch outside high
      if (random < 0.08) { //SINGLE
        var call = 1;
      } else if (random < 0.09) { //DOUBLE
        var call = 2;
      } else if (random < 0.095) { //TRIPLE
        var call = 3;
      } else if (random < 0.10) { //HR
        var call = 4;
      } else if (random < 0.45) { //BALL
        var call = 5;
      } else if (random < 0.90) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 1) { //pitch middle high
      if (random < 0.07) { //SINGLE
        var call = 1;
      } else if (random < 0.08) { //DOUBLE
        var call = 2;
      } else if (random < 0.085) { //TRIPLE
        var call = 3;
      } else if (random < 0.090) { //HR
        var call = 4;
      } else if (random < 0.50) { //BALL
        var call = 5;
      } else if (random < 0.85) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 2) { //pitch inside high
      if (random < 0.02) { //HBP
        var call = 0;
      } else if (random < 0.05) { //SINGLE
        var call = 1;
      } else if (random < 0.06) { //DOUBLE
        var call = 2;
      } else if (random < 0.065) { //TRIPLE
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
    else if (location === 3) { //pitch outside middle
      if (random < 0.049) { //SINGLE
        var call = 1;
      } else if (random < 0.09) { //DOUBLE
        var call = 2;
      } else if (random < 0.095) { //TRIPLE
        var call = 3;
      } else if (random < 0.10) { //HR
        var call = 4;
      } else if (random < 0.50) { //BALL
        var call = 5;
      } else if (random < 0.90) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 4) { //pitch middle
      if (random < 0.01) { //SINGLE
        var call = 1;
      } else if (random < 0.014) { //DOUBLE
        var call = 2;
      } else if (random < 0.016) { //TRIPLE
        var call = 3;
      } else if (random < 0.018) { //HR
        var call = 4;
      } else if (random < 0.70) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 5) { //pitch inside middle
      if (random < 0.03) { //HBP
        var call = 0;
      } else if (random < 0.06) { //SINGLE
        var call = 1;
      } else if (random < 0.065) { //DOUBLE
        var call = 2;
      } else if (random < 0.07) { //TRIPLE
        var call = 3;
      } else if (random < 0.075) { //HR
        var call = 4;
      } else if (random < 0.42) { //BALL
        var call = 5;
      } else if (random < 0.75) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 6) { //pitch outside middle
      if (random < 0.049) { //SINGLE
        var call = 1;
      } else if (random < 0.09) { //DOUBLE
        var call = 2;
      } else if (random < 0.095) { //TRIPLE
        var call = 3;
      } else if (random < 0.10) { //HR
        var call = 4;
      } else if (random < 0.50) { //BALL
        var call = 5;
      } else if (random < 0.90) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 7) { //pitch middle
      if (random < 0.07) { //SINGLE
        var call = 1;
      } else if (random < 0.08) { //DOUBLE
        var call = 2;
      } else if (random < 0.085) { //TRIPLE
        var call = 3;
      } else if (random < 0.1) { //HR
        var call = 4;
      } else if (random < 0.50) { //BALL
        var call = 5;
      } else if (random < 0.85) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
    else if (location === 8) { //pitch inside middle
      if (random < 0.03) { //HBP
        var call = 0;
      } else if (random < 0.06) { //SINGLE
        var call = 1;
      } else if (random < 0.07) { //DOUBLE
        var call = 2;
      } else if (random < 0.09) { //TRIPLE
        var call = 3;
      } else if (random < 0.10) { //HR
        var call = 4;
      } else if (random < 0.42) { //BALL
        var call = 5;
      } else if (random < 0.90) { //STRIKE
        var call = 6;
      } else { //FLY or GROUND-OUT
        var call = 7;
      }
    }
