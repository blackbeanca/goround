document.addEventListener("DOMContentLoaded", function() {
    const vinylRecords = document.querySelectorAll(".vinyl-record");

    vinylRecords.forEach(record => {
        record.addEventListener("touchstart", function() {
            record.style.transform = "rotate(360deg)";
        });

        record.addEventListener("touchend", function() {
            setTimeout(function() {
                record.style.transform = "rotate(0deg)";
            }, 500);
        });
    });
});
