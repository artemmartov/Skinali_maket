document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu_active');
});


document.querySelector('.select').addEventListener('click', () => {
    document.querySelector('.select__dropdown').classList.toggle('select__dropdown_open');
});

let inputId = document.querySelector('.select_checked');
let first = document.querySelectorAll('.select-option')[0];
let second = document.querySelectorAll('.select-option')[1];

console.log(inputId);


second.addEventListener('click', () => {
    inputId.textContent = second.getAttribute('value');
});

first.addEventListener('click', () => {
    inputId.textContent = first.getAttribute('value');
});



// console.log(document.querySelector('.select'));
// console.log(document.querySelector('select__dropdown'));

