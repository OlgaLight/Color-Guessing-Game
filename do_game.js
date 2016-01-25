/**
 * Created by olga on 25.01.16.
 */
var color = ["aquamarine", "bisque", "burlywood", "chartreuse", "cornsilk", "crimson",
    "deeppink", "firebrick", "fuchsia", "gainsboro", "goldenrod", "honeydew", "lemonchiffon",
    "linen", "maroon", "midnightblue", "mintcream", "moccasin", "oldlace", "papayawhip",
    "sienna", "springgreen", "tan", "thistle", "tomato", "turquoise", "yellowgreen"];

var guess_input;
var finished = false;
var guesses = 0;
var color_index;
var target;

function do_game() {
    var random_number = Math.random() * 15;
    var random_number_integer = Math.floor(random_number);
    color_index = random_number_integer;
    target = color[color_index];

    // alert(target);

    while (!finished) {
        guess_input = prompt("I am thinking of one of this colors: " +
            color.join(", ") + "\n\n" +
            "What color am I thinking of?");
        guess_input = guess_input.toLowerCase();
        guesses += 1;
        finished = check_guess();
    }
}

function check_guess() {
    //check if I had this color in my hash;
    if (color.indexOf(guess_input) == -1) {
        alert("Sorry, I don't recognize your color.\n\n Please try again.");
        return false;
    }

    // if this color higher alphabetical;
    if (guess_input > target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically higher than mine.\n\n" +
            "Please try again.");
        return false;
    }

    // if this color lower alphabetical;
    if (guess_input < target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically lower than mine.\n\n" +
            "Please try again.");
        return false;
    }

    //that it is!
    myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    alert("Congratulations! You have guessed the color!\n\n" +
        "It took you " + guesses + " guesses to finish the game!\n\n" +
        "You can see the " + guess_input + " color in the background.");
    return true;
}