$(document).ready(function () {

    // owl carousel 
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 10
    });


    // image gallery 
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

});


// todo list 
let button = document.getElementById('add');
let input = document.getElementById('input');
let todolist = document.getElementById('todolist');

button.addEventListener('click', () => {
    if (input.value === '') {
        alert("Enter valid task...")
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        todolist.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "<i class='bx bx-x f20'></i>"
        li.appendChild(span)
    }
    input.value = '';
    saveData();
})

todolist.addEventListener('click', function (element) {
    if (element.target.tagName === 'LI') {
        element.target.classList.toggle('checked');
        saveData();
    }
    else if (element.target.tagName === 'I') {
        element.target.parentElement.parentElement.remove();
        saveData();
    };
});

function saveData() {
    localStorage.setItem('data', todolist.innerHTML )
};

function showData() {
    todolist.innerHTML = localStorage.getItem('data')
};

showData();