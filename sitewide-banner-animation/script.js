$(document).ready(function () {
    // Sitewide animation
    const promoItems = $('.promo-content');
    let index = 0;

    function toggleAnimation() {
        promoItems.removeClass('animate-in');

        promoItems.eq(index).addClass('animate-in');
        index = (index + 1) % promoItems.length;
    }

    toggleAnimation();
    setInterval(toggleAnimation, 2000);

    // Countdown timer
    var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("EXPIRED");
        }
    }, 1000);
});
