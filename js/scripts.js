var roman = function(input) {
    var romans = [];
        romans[1] = 'I';
        romans[2] = 'V';
        romans[3] = 'X';
        romans[4] = 'L';
        romans[5] = 'C';
        romans[6] = 'D';
        romans[7] = 'M';

        var roman1000 = 0;
        var roman500 = 0;
        var roman100 = 0;
        var roman50 = 0;
        var roman10 = 0;
        var roman5 = 0;
        var roman1 = 0;
        var empty_string = "";


    while (input >= 1)
    {   roman1000 = (parseInt(input / 1000));
        input -= (roman1000 * 1000);

        roman500 = (parseInt(input / 500));
        input -= (roman500 * 500);

        roman100 = (parseInt(input / 100));
        input -= (roman100 * 100);

        roman50 = (parseInt(input / 50));
        input -= (roman50 * 50);

        roman10 = (parseInt(input / 10));
        input -= (roman10 * 10);

        var roman5 = (parseInt(input / 5));
        input -= (roman5 * 5);

        var roman1 = (parseInt(input / 1));
        input -= (roman1 * 1);

    };
    for (var i = 0; i < roman1000; i++)
    {
        empty_string += romans[7];
    };
    for (var i = 0; i < roman500; i++)
    {
        empty_string += romans[6];
    };
    for (var i = 0; i < roman100; i++)
    {
        empty_string += romans[5];
    };
    for (var i = 0; i < roman50; i++)
    {
        empty_string += romans[4];
    };
    for (var i = 0; i < roman10; i++)
    {
        empty_string += romans[3];
    };
    for (var i = 0; i < roman5; i++)
    {
        empty_string += romans[2];
    };
    for (var i = 0; i < roman1; i++)
    {
        empty_string += romans[1];
    };

    return empty_string;
};

$(document).ready(function() {
    $('form#romannumeral').submit(function(event) {
        var input = $('input#input').val();
        var result = roman(input);

        $('.empty_string').text(result);

        $('#result').show();
        event.preventDefault();
    });
});




//     var new_romans = empty_string.split("");
//     for (var i = 0; i < empty_string.length; i++)
//     {
//         if (new_romans[i] === new_romans[i + 1])
//         {
//             if (new_romans[i + 1] === new_romans[i + 2])
//             {
//                 if (new_romans[i + 2] === new_romans[i + 3])
//                 {
//                     var find_this = romans.indexOf(new_romans[i]);
//                     console.log(new_romans);
//                     new_romans = new_romans.slice(i,(i+1));
//                     console.log(new_romans);
//
//                     console.log (romans.indexOf(new_romans[i]));
//                     var push_this = romans[find_this + 1];
//                     console.log(romans[find_this + 1]);
//
//
//                     new_romans.push(push_this);
//
//                     return new_romans.join("");
//
//                 };
//             };
//         };
//
//     };
//     return new_romans.join("");
// };
