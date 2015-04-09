var pitch = function(choice) {
    var p = choice;
    var call, random = Math.random();

    if (p === 0) {
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
        return call;

    else if (p === 1) {
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
        return call;

    else if (p === 2) {
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
        return call;

        

    }
