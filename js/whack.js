const hole = document.querySelectorAll('.hole');
const rats = document.querySelectorAll('.rat');
const boardScore = document.querySelector('.score');
const sounds = document.querySelector('#sounds');
const soundOne = document.querySelector('#soundOne');

let timeleft = 25;



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
    const tRandom = randomTime(300, 1500);
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
    document.getElementById("endScreen").style.display='none';
    soundOne.play();
    finish = false;
    score = 0;
    getRats();
    setTimeout(() => {
    finish = true ;
    }, 25000);
    timeleft= 25;

    
    
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.getElementById("timer").innerHTML ="finished" ;
           
        } else {
          document.getElementById("timer").innerHTML = timeleft ;
        }
        timeleft -= 1;
      }, 1000);
      
      setTimeout(()=> {
          replay();

      },25000); 
}


// to get score 

function getHit(){
    score++;
    boardScore.textContent = score;
    sounds.play();
    this.parentNode.classList.remove('up');
}

//looping to hit all the rats

rats.forEach( r => {
    r.addEventListener('click', getHit);
       
    });

function replay (){
    document.getElementById('endScreen').style.display='block';
    boardScore.textContent = "0";

}

