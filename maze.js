$(document).ready(function() {
    var gameLost = false;

    // Function to handle losing the game
    function loseGame() {
        $(".boundary").addClass("youlose");
        $("#status").text("You lose!");
        gameLost = true;
    }

    // Mouseover handler for walls
    $(".boundary").mouseover(function() {
        loseGame();
    });

    // Click handler for Start
    $("#start").click(function() {
        $(".boundary").removeClass("youlose");
        $("#status").text(""); // Clear the status message
        gameLost = false;
    });

    // Mouseover handler for End
    $("#end").mouseover(function() {
        if (!gameLost) {
            $("#status").text("You win!");
        }
    });
});

