$(document).ready(function () {

    var random = Math.floor(Math.random() * 102 + 19);

    $("#numberToGet").text(random);

    var crystalValues = [
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1)
    ];

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        $("#numberToGet").text(random);
        crystalValues[0] = Math.floor(Math.random() * 12 + 1);
        crystalValues[1] = Math.floor(Math.random() * 12 + 1);
        crystalValues[2] = Math.floor(Math.random() * 12 + 1);
        crystalValues[3] = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $("#score").text(userTotal);
    };

    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    };

    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    };

    $("#peridot").on("click", function () {
        userTotal = userTotal + crystalValues[0];
        $("#score").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    });

    $("#ruby").on("click", function () {
        userTotal = userTotal + crystalValues[1];
        $("#score").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    });

    $("#sapphire").on("click", function () {
        userTotal = userTotal + crystalValues[2];
        $("#score").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    });

    $("#topaz").on("click", function () {
        userTotal = userTotal + crystalValues[2];
        $("#score").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    });


    function getCrystal(crystalKey) {
        return function () {
            userTotal = userTotal + crystalValues[crystalKey];
            console.log("New userTotal " + userTotal);
            $("#score").text(userTotal);

            if (userTotal === random) {
                winner()
            }

            else if (userTotal > random) {
                loser()
            }
        }

    }
});