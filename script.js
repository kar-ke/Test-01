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
    document.querySelectorAll('.marquee-item').forEach((item, i) => {
        item.style.setProperty('--n', i + 1);
    });

    // accordian 
    document.querySelectorAll('.accordion-item').forEach((element) => {
        element.addEventListener('click', function () {
            document.querySelectorAll('.accordion-item').forEach((item) => {
                if (item !== this && item.classList.contains('active')) {
                    item.classList.remove('active');
                };
            });
            this.classList.toggle('active');
        });
    });


    // to-to list 
    let input = document.getElementById('task');
    let button = document.getElementById('add-btn');
    let todolist = document.getElementById('todo-list');
});

