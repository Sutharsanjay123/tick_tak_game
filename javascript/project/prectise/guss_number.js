// const guessField = document.getElementById('guessField');
// const submitBtn = document.getElementById('subt');
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');


const guessfild = document.getElementById('guess');
const text = document.getElementById('guessField');
const btn = document.getElementById('subt');
const loworhi = document.querySelector('.lowOrHi');
const stratgame = document.querySelector('.resultParas');
const gusses = document.querySelector('.guesses');
const lastnumber = document.querySelector('.lastResult');

const random = parseInt(Math.random() * 100 + 1)

let prvguss =[]
let numgame =1

let playgame = true

if(playgame){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        const guss =parseInt(text.random)
        console.log(guss)
        validguss(guss)
    })
}

function validguss(guss){
     prvguss.push(guss)
     if(guss < 1){
        alert('please enter valid number above 1')
     }else if(guss > 100){
        alert('please enter valid number belove 100')
     }else{
        if(numgame == 11){
            displaygame(guss)
            displaymass(`Game over : try next time ${numgame}`)
            endgame();
        }else{
            displaymass(massage);
            checkguss(guss)
        }
     }
}
function checkguss(guss){
    if(numgame<11){
        if(guss === rendom){
            display('number are correct');
        }else if(guss < rendom){
            display('number are to LOW');
        }else if(guss > rendom){
            display('number are to HIGH');
        }
    }
}

function displaygame(guss){
    text.value = ''
    gusses.innerHTML +=`${guss}`
    numgame++
    lastnumber.innerHTML =`(11-${numgame})`
}
function displaymass(massage){
   loworhi.innerHTML =`<h>${massage}</h>`
    
}

function newgame(){
    
}
function endgame(){
    
}
