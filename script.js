document.addEventListener("DOMContentLoaded", function() {
    const vinylRecord = document.getElementById("vinyl-record");

    vinylRecord.addEventListener("touchstart", function() {
        vinylRecord.style.transform = "rotate(360deg)";
    });

    vinylRecord.addEventListener("touchend", function() {
        // Reset the transformation after the touch ends (optional)
        setTimeout(function() {
            vinylRecord.style.transform = "rotate(0deg)";
        }, 500); // Adjust the delay to match the duration of the CSS transition
    });
});
