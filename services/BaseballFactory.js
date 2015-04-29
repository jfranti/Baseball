factory.strike = function () {
    if (factory.strike < 2) {
        factory.strike = (factory.strike + 1);
    } else if (factory.outs < 2){
        factory.outs = (factory.outs + 1);
    } else {
        factory.innings = (factory.innings + 1);
    }
}
