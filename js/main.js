'use strict';
//Elementos que necesito del HTML
const btn = document.querySelector('.js-btn');
const span = document.querySelector('.js-span-play')
const bets = document.querySelector('.js-bets')


//Declarar funciones y eventos

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }








btn.addEventListener('click', handleClickBtn);