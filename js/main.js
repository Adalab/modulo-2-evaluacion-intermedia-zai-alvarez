'use strict';
//Elementos que necesito del HTML
const btn = document.querySelector('.js-btn');
const span = document.querySelector('.js-span-play')
const bets = document.querySelector('.js-bets')
const selectValue = document.querySelector('.js-select')
const winer = document.querySelector('.js-winer')
const loser = document.querySelector('.js-loser')

//Declarar funciones y eventos
function handleClickBtn (){
function cogerValor();
function cogerValorRandom();
function text();
}
function text (){
if (selectValue === random){
    winer.classList.remove('loser');
    mainElement.classList.add('winer');
}
else{
    winer.classList.remove('winer');
    mainElement.classList.add('loser');
}

function cogerValor (){
    const selectValue = select.value;
    return selectValue;
}
}

function cogerValorRandom(){
    const random = getRandomNumber.value;
    return random;
}


    function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
      }



//Generar número aleatorio

  function generarNumeroAleatorio(max) {
    const aleatorio = parseInt (Math.random()*max);
    return aleatorio;

//Código que se ejecuta cuando carga la página

btn.addEventListener('click', handleClickBtn);