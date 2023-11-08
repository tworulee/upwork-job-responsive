function countdown() {
    var seconds = 90; // 1 minute and 30 seconds
    var countdownDiv = document.getElementById("timer");

    var countdownInterval = setInterval(function() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        countdownDiv.innerHTML ="Act quickly! This prior approval expires in "  + minutes + " : " + remainingSeconds ;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownDiv.innerHTML = "Countdown Completed!";
        }

        seconds--;
    }, 1000); // Update every 1 second (1000 milliseconds)
}

countdown();