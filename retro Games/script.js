const hole = document.querySelectorAll('.hole');
const rats = document.querySelectorAll('.rat');
const boardScore = document.querySelector('.score');
//const play = document.querySelector('.start');

let moleBefore;
let finish ;
let score;

function randomHoles(hole){
    const h = Math.floor(Math.random() * hole.length);
    const hRandom = hole [h];
    if (hRandom == moleBefore){
        randomHoles(hole);
    }
    moleBefore = hRandom
    return hRandom;
}
// make a random time for rats showup
function randomTime(min, max){
    return Math.round(Math.random() * (max - min));
}

//get rats showup
function getRats(){
    const hRandom = randomHoles(hole);
    const tRandom = randomTime(300, 1000);
    hRandom.classList.add('up');
    
    setTimeout(() => {
        hRandom.classList.remove('up');
        if (! finish){
        getRats();
        }
    }, tRandom)

}

//make the rules of the games
function play (){
    finish = false;
    score = 0;
    getRats();
    setTimeout(() => {
    finish = true ;
    }, 10000);
}


// to get score 

function getHit(){
    score++;
    boardScore.textContent = score;
    this.parentNode.classList.remove('up');
}

//looping to hit all the rats

rats.forEach( r => {
    r.addEventListener('click', getHit);
       
    });
