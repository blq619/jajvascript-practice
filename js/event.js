const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const circle = document.querySelector('#circle');

const buttons = document.querySelectorAll('button');
// console.log(buttons);
buttons.forEach((item) => {
    item.addEventListener('click', ()=> {
        console.log(item.innerText);
        circle.style.background = item.innerText;
    })
})