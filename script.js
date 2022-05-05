const display = document.querySelector('#innerDisplay');
const equaler = document.querySelector('#equal');
const clear = document.querySelector('#C');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const percent = document.querySelector('#percent');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const sign = document.querySelector('#sign');
const decimal = document.querySelector('#decimal');

let valuer = '0';

function sevenClicked(){
    if (valuer === '0'){
        valuer = '7'
        display.textContent= valuer
    }else {
        valuer = valuer + '7';
        display.textContent= valuer
    }
}

function eightClicked(){
    if (valuer === '0'){
        valuer = '8'
        display.textContent= valuer
    }else {
        valuer = valuer + '8';
        display.textContent= valuer
    }
}

function nineClicked(){
    if (valuer === '0'){
        valuer = '9'
        display.textContent= valuer
    }else {
        valuer = valuer + '9';
        display.textContent= valuer
    }
}

function fiveClicked(){
    if (valuer === '0'){
        valuer = '5'
        display.textContent= valuer
    }else {
        valuer = valuer + '5';
        display.textContent= valuer
    }
}

function fourClicked(){
    if (valuer === '0'){
        valuer = '4'
        display.textContent= valuer
    }else {
        valuer = valuer + '4';
        display.textContent= valuer
    }
}

function threeClicked(){
    if (valuer === '0'){
        valuer = '3'
        display.textContent= valuer
    }else {
        valuer = valuer + '3';
        display.textContent= valuer
    }
}
function twoClicked(){
    if (valuer === '0'){
        valuer = '2'
        display.textContent= valuer
    }else {
        valuer = valuer + '2';
        display.textContent= valuer
    }
}
function oneClicked(){
    if (valuer === '0'){
        valuer = '1'
        display.textContent= valuer
    }else {
        valuer = valuer + '1';
        display.textContent= valuer
    }
}

function zeroClicked(){
    if (valuer === '0'){
        valuer = '0'
        display.textContent= valuer
    }else {
        valuer = valuer + '0';
        display.textContent= valuer
    }
}

function sixClicked(){
    if (valuer === '0'){
        valuer = '6'
        display.textContent= valuer
    }else {
        valuer = valuer + '6';
        display.textContent= valuer
    }
}

function cClicked(){
    valuer = '0'
    display.textContent = valuer
}



function signClicked(){
    valuer = parse(valuer) * -1
    display.textContent = valuer;
}

function percentClicked(){
    valuer = parse(valuer) /100
    display.textContent = valuer;
}

function divider(){
    valuer = valuer + '/'
    display.textContent = valuer;
}
function multiplier(){
    valuer = valuer + '*'
    display.textContent = valuer;
}
function pluser(){
    valuer = valuer + '+'
    display.textContent = valuer;
}
function minuser(){
    valuer = valuer + '-'
    display.textContent = valuer;
}
function decimaler(){
    valuer = valuer + '.'
    display.textContent = valuer;
}

function equal() {
    valuer = parse(valuer)
    console.log(valuer)
    display.textContent = valuer
}


function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
   

equaler.addEventListener('click', equal)
C.addEventListener('click', cClicked)
seven.addEventListener('click', sevenClicked)
eight.addEventListener('click', eightClicked)
nine.addEventListener('click', nineClicked)
six.addEventListener('click', sixClicked)
five.addEventListener('click', fiveClicked)
four.addEventListener('click', fourClicked)
three.addEventListener('click', threeClicked)
two.addEventListener('click', twoClicked)
one.addEventListener('click', oneClicked)
zero.addEventListener('click', zeroClicked)
sign.addEventListener('click', signClicked)
percent.addEventListener('click', percentClicked)
divide.addEventListener('click', divider)
multiply.addEventListener('click', multiplier)
plus.addEventListener('click', pluser)
minus.addEventListener('click', minuser)
decimal.addEventListener('click', decimaler)