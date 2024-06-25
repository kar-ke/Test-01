$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 10
    });


    document.querySelectorAll('.gallery-image').forEach(function(element) {
        element.addEventListener('click', function() {
            element.classList.toggle('gallery');
        });
    });

    // infinite scroll 
    document.querySelectorAll('.scroll-item').forEach((item, i) => {
        item.style.setProperty('--n', i + 1);
    });

    // accordian 
    document.querySelectorAll('.accordian-item').forEach(function (element) {
        element.addEventListener('click', function () {
            element.classList.toggle('active');
        });
    });

});
