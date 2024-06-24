$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 10
    });

    $('.gallery-image').click(function () {
        $(this).toggleClass('gallery');
    })






});
