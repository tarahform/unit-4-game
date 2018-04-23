$(document).ready(function () {

    var random = Math.floor(Math.random() * 102 + 19);

    $("#numberToGet").text(random);

    var crystalValues = {}
    crystalValues[1] = Math.floor(Math.random() * 12 + 1);
    crystalValues[2] = Math.floor(Math.random() * 12 + 1);
    crystalValues[3] = Math.floor(Math.random() * 12 + 1);
    crystalValues[4] = Math.floor(Math.random() * 12 + 1);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random);
        $("#numberToGet").text(random);
        crystalValues[1] = Math.floor(Math.random() * 12 + 1);
        crystalValues[2] = Math.floor(Math.random() * 12 + 1);
        crystalValues[3] = Math.floor(Math.random() * 12 + 1);
        crystalValues[4] = Math.floor(Math.random() * 12 + 1);
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

    $("#peridot", "#sapphire", "#ruby", "#topaz").on("click", function () {
        userTotal = userTotal + ("#peridot", "#sapphire", "#ruby", "#topaz");
        $("#score").text(userTotal);

        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    });

    function getCrystalHandler(crystalKey) {
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

$("#peridot").on("click", getCrystalHandler(1));
$("#ruby").on("click", getCrystalHandler(2));
$("#sapphire").on("click", getCrystalHandler(3));
$("#topaz").on("click", getCrystalHandler(4));