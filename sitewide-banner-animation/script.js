$(document).ready(function () {
    // Sitewide animation
    const promoItems = $('.promo-content');
    let index = 0;

    function toggleAnimation() {
        // Remove any existing 'animate-in' class from all promo items
        promoItems.removeClass('animate-in');

        // Add 'animate-in' class to the current promo item based on index
        promoItems.eq(index).addClass('animate-in');
        // Update index for the next promo item
        index = (index + 1) % promoItems.length;
    }

    toggleAnimation();
    setInterval(toggleAnimation, 2000);

    // Countdown timer
    // Set the date to countdown to
    var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the element with id="countdown"
        $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("EXPIRED");
        }
    }, 1000);
});
