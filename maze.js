$(document).ready(function() {
    var gameLost = false;

    // Function to handle losing the game
    function loseGame() {
        $(".boundary").addClass("youlose");
        gameLost = true;
    }

    // Mouseover handler for walls
    $(".boundary").mouseover(function() {
        loseGame();
    });

    // Click handler for Start
    $("#start").click(function() {
        $(".boundary").removeClass("youlose");
        gameLost = false;
    });

    // Mouseover handler for End
    $("#end").mouseover(function() {
        if (!gameLost) {
            alert("You win!");
        }
    });
});
