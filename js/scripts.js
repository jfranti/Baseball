var scrabbler = function(word) {
        var scores1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
        var scores2 = ['D', 'G'];
        var scores3 = ['B', 'C', 'M', 'P'];
        var scores4 = ['F', 'H', 'V', 'W', 'Y'];
        var scores5 = ['K'];
        var scores8 = ['J', 'X'];
        var scores10 = ['Q', 'Z'];
        var total_score = 0;
        var upper_word = word.toUpperCase();
        var split_word = upper_word.split("");
        console.log(split_word);
        for (var i=[0]; i < split_word.length; i++) {
        if ($.inArray(split_word[i], scores1) !== -1) {
            total_score += 1;
        } else if ($.inArray(split_word[i], scores2) !== -1) {
            total_score += 2;
        } else if ($.inArray(split_word[i], scores3) !== -1) {
            total_score += 3;
        } else if ($.inArray(split_word[i], scores4) !== -1) {
            total_score += 4;
        } else if ($.inArray(split_word[i], scores5) !== -1) {
            total_score += 5;
        } else if ($.inArray(split_word[i], scores8) !== -1) {
            total_score += 8;
        } else if ($.inArray(split_word[i], scores10) !== -1) {
            total_score += 10;
        }
    };
    return total_score;
};


$(document).ready(function() {
    $('form#word').submit(function(event) {
            var word = $('input#word').val();
            var result = scrabbler(word);

            $('.total_score').text(result);

            $('#result').show();
            event.preventDefault();
    });
});
