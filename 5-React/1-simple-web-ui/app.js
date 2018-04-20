

// using DOM API

// Plain-JS

// let hideBtn = document.querySelector('#hideBtn');
// let showBtn = document.querySelector('#showBtn');
// let greetBtn = document.querySelector('#greetBtn');

// hideBtn.addEventListener('click', (e) => {
//     let box = document.querySelector('.alert');
//     box.style.display = 'none'
// });
// showBtn.addEventListener('click', (e) => {
//     let box = document.querySelector('.alert');
//     box.style.display = ''
// });
// greetBtn.addEventListener('click', (e) => {
//     let box = document.querySelector('.alert');
//     box.innerText = "good morning"
// });


// using jQuery

$(document).ready(() => {
    let box = $('.alert');
    $('#hideBtn').click(() => {
        //box.hide(5000);
        box.slideUp(1000)
    })
    $('#showBtn').click(() => {
        // box.show(5000)
        box.slideDown(1000)
    })
    $('#greetBtn').click(() => {
        box.text('good morning');
    })
});