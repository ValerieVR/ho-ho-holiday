




var progress = document.querySelector('.progress');
var percent = document.querySelector('.percent')
var count = 4;
var per = 16;
var loading = setInterval(animate,10);
function animate(){
    if (count == 100 && per == 400){
        percent.textContent = "COMPLETED..."
        percent.classList.add("text-blink");
        clearInterval(loading);
        location.href = "https://www.thecrazyprogrammer.com/2019/09/javascript-tic-tac-toe-game.html"
    }else{
        per =per+4
        count = count + 1;
        progress.style.width = per + 'px'
        percent.textContent = "LOADING..."
    }
}


//background

const COLOR_SPACE ="black";
const COLOR_STARS = "pink";
const STAR_NUM = 150; // number of stars in the starfield
const STAR_SIZE = 0.010; // max star size as a fraction of screen width
const STAR_SPEED = 0.05; // fraction of screen width per second

// set up the canvas and context
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);

// set up the stars
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
for (let i = 0; i < STAR_NUM; i++) {
    let speedMult = Math.random() * 1.5 + 0.5;
    stars[i] = {
        r: Math.random() * STAR_SIZE * canvas.width / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult
    }
}

// set up the animation loop
var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {

    // calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;

    // space background
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    ctx.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();

        // update the star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
            stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
            stars[i].x = 0 - stars[i].r;
        }
        
        // update the star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
            stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
        }
    }

    // call the next frame
    requestAnimationFrame(loop);
}

function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1; 
}
