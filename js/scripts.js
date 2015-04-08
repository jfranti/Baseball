var roman = function(input) {
    var romans = {1: 'I'};
        romans[5] = 'V';
        romans[10] = 'X';
        romans[50] = 'L';
        romans[100] = 'C';
        romans[500] = 'D';
        romans[1000] = 'M';
        var roman1000 = 0;
        var roman500 = 0;
        var roman100 = 0;
        var roman50 = 0;
        var roman10 = 0;
        var roman5 = 0;
        var roman1 = 0;
        var counter = 0;
        var empty_string = "";


    while (input >= 1)
    {   roman1000 = (parseInt(input / 1000));
        counter += roman1000;

        input -= (roman1000 * 1000);

        roman500 = (parseInt(input / 500));
        counter += roman500;

        input -= (roman500 * 500);

        roman100 = (parseInt(input / 100));
        counter += roman100;

        input -= (roman100 * 100);

        roman50 = (parseInt(input / 50));
        counter += roman50;

        input -= (roman50 * 50);

        roman10 = (parseInt(input / 10));
        counter += roman10;

        input -= (roman10 * 10);

        var roman5 = (parseInt(input / 5));
        counter += roman5;

        input -= (roman5 * 5);

        var roman1 = (parseInt(input / 1));
        counter += roman1;

        input -= (roman1 * 1);

    };
    for (var i = 0; i < roman1000; i++)
    {
        empty_string += romans[1000];

    };
    for (var i = 0; i < roman500; i++)
    {
        empty_string += romans[500];

    };
    for (var i = 0; i < roman100; i++)
    {
        empty_string += romans[100];

    };
    for (var i = 0; i < roman50; i++)
    {
        empty_string += romans[50];

    };
    for (var i = 0; i < roman10; i++)
    {
        empty_string += romans[10];

    };
    for (var i = 0; i < roman5; i++)
    {
        empty_string += romans[5];

    };
    for (var i = 0; i < roman1; i++)
    {
        empty_string += romans[1];

    };
    return empty_string;



};
