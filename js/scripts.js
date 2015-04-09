var pitch = function(choice) {
    var pitches = choice;
    var result, random = Math.random();
    var call = 0;
    var balls = 0;
    var strikes = 0;
    var outs = 0;
    var runs = 0;
    var base = 0;

//Pitches and Outcomes
        if (pitches === 0) {
            if (random < 0.01) {
                var call = 1;
            } else if (random < 0.04) {
                var call = 2;
            } else if (random < 0.08) {
                var call = 3;
            } else if (random < 0.13) {
                var call = 4;
            } else if (random < 0.48) {
                var call = 5;
            } else {
                var call = 6;
            }
        }
        else if (pitches === 1) {
            if (random < 0.02) {
                var call = 1;
            } else if (random < 0.07) {
                var call = 2;
            } else if (random < 0.17) {
                var call = 3;
            } else if (random < 0.32) {
                var call = 4;
            } else {
                var call = 6;
            }
        }
        else if (pitches === 2) {
            if (random < 0.01) {
                var call = 0;
            } else if (random < 0.02) {
                var call = 1;
            } else if (random < 0.05) {
                var call = 2;
            } else if (random < 0.09) {
                var call = 3;
            } else if (random < 0.14) {
                var call = 4;
            } else if (random < 0.50) {
                var call = 5;
            } else {
                var call = 6;
            }
        }
        return call;
        console.log(call);
    };

// //Balls and Strikes
//     for(var c in call) {
//         if (c === 6) {
//             strikes++;
//         } else if (c === 5) {
//             ball++;
//         } else if (c === 4) {
//             base++;
//         } else if (c === 3) {
//             base = base + 2;
//         } else if (c === 2) {
//             base = base + 4;
//         } else if (c === 1) {
//             base = base + 3;
//         } else if (c === 0) {
//             base = base++;
//         }
//     }
//     return
// };
