

document.getElementById('level2').hidden = true;
document.getElementById('level3').hidden = true;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
const box = 20;
let score = 0 ;
const eat = new Audio();
const hitWall = new Audio();
const hitMe = new Audio();
eat.src = "../assets/sounds/eat.mp3";
hitWall.src = "../assets/sounds/hitWall.mp3";
hitMe.src = "../assets/sounds/hitMe.mp3";



const foodImg = new Image(20,20)

//TODO foodimg
function foodImgFn (){
foodImg.src = "../assets/img/snakeGame/food.png"
    foodImg .onload = function(){
        ctx.drawImage(foodImg , food.x, food.y);

}}

foodImgFn();

let snake =[]
snake[0]={
    x:12*box,
    y:10*box
}
//TODO get food
function random_food(min, max) {
    return Math.round((Math.random() * (max-min) + min) / box) * box;
}

let food ={
    x : random_food(0,canvas.width - box),
    y : random_food(0, canvas.height - box)
}


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        var grd = ctx.createLinearGradient(0, 0, 170, 0);
        grd.addColorStop(0, "#cc0099");
        grd.addColorStop(1, "#ff66cc");
        ctx.fillStyle = grd;

        ctx.fillRect(snake[i].x, snake[i].y, box, box)
        ctx.strokeStyle = 'brown';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box)
    }
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(snakeX == food.x && snakeY == food.y){

        score++
        eat.play();
        document.getElementById('score').innerHTML = score;
        food ={
            x : random_food(0,canvas.width - box),
            y : random_food(0, canvas.height - box)
        }
    }else{
        snake.pop();
    }

    if(d == "LEFT") snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d =="DOWN") snakeY += box;

    let newHead ={
        x:snakeX,
        y:snakeY
    }
    if (score == 2){
        clearInterval(game)

        document.getElementById('level2').hidden = false;
    }
    if( snakeX< 0 || snakeY< 0 || snakeX >canvas.width- box || snakeY>canvas.height - box|| collision(newHead,snake) ) {
        hitMe.play();
        clearInterval(game)
    }

    snake.unshift(newHead);
    ctx.drawImage(foodImg , food.x, food.y);


}

let game = setInterval(draw,200)


let d;
document.addEventListener('keydown', function (e)  {
    if(e.keyCode == '37' && d!= "RIGHT"){

         d= "LEFT"
        hitWall.play()
    }else if(e.keyCode =='38' && d!= "DOWN"){
        d= "UP"
        hitWall.play()
    }else if(e.keyCode == '39' && d!= "LEFT"){
        d= "RIGHT"
        hitWall.play()
    }else if(e.keyCode == '40' && d!= "UP"){
        d= "DOWN"
        hitWall.play()
    }



})


function collision(head,array){
    for (let i =0; i<array.length;i++){
        if  (head.x == array[i].x && head.y == array[i].y){
            return true
        }

    }return false
}
document.getElementById("level2").addEventListener("click", function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext("2d");
    const box = 20;
    let score = 0 ;
    const eat = new Audio();
    const hitWall = new Audio();
    const hitMe = new Audio();
    eat.src = "../assets/sounds/eat.mp3";
    hitWall.src = "../assets/sounds/hitWall.mp3";
    hitMe.src = "../assets/sounds/hitMe.mp3";



    const foodImg = new Image(20,20)

//TODO foodimg
    function foodImgFn (){
        foodImg.src = "../assets/img/snakeGame/food.png"
        foodImg .onload = function(){
            ctx.drawImage(foodImg , food.x, food.y);

        }}

    foodImgFn();

    let snake =[]
    snake[0]={
        x:12*box,
        y:10*box
    }
//TODO get food
    function random_food(min, max) {
        return Math.round((Math.random() * (max-min) + min) / box) * box;
    }

    let food ={
        x : random_food(0,canvas.width - box),
        y : random_food(0, canvas.height - box)
    }


    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < snake.length; i++) {
            var grd = ctx.createLinearGradient(0, 0, 170, 0);
            grd.addColorStop(0, "#cc0099");
            grd.addColorStop(1, "#ff66cc");
            ctx.fillStyle = grd;

            ctx.fillRect(snake[i].x, snake[i].y, box, box)
            ctx.strokeStyle = 'brown';
            ctx.strokeRect(snake[i].x, snake[i].y, box, box)
        }
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
        if(snakeX == food.x && snakeY == food.y){

            score++
            eat.play();
            document.getElementById('score').innerHTML = score;
            food ={
                x : random_food(0,canvas.width - box),
                y : random_food(0, canvas.height - box)
            }
        }else{
            snake.pop();
        }

        if(d == "LEFT") snakeX -= box;
        if(d == "UP") snakeY -= box;
        if(d == "RIGHT") snakeX += box;
        if(d =="DOWN") snakeY += box;

        let newHead ={
            x:snakeX,
            y:snakeY
        }
        if (score == 3){
            document.getElementById('level2').hidden = true;
            clearInterval(game)
            document.getElementById('level3').hidden = false;

        }
        if( snakeX< 0 || snakeY< 0 || snakeX >canvas.width- box || snakeY>canvas.height - box|| collision(newHead,snake) ) {
            hitMe.play();
            clearInterval(game)
        }

        snake.unshift(newHead);
        ctx.drawImage(foodImg , food.x, food.y);


    }

    let game = setInterval(draw,120)


    let d;
    document.addEventListener('keydown', function (e)  {
        if(e.keyCode == '37' && d!= "RIGHT"){

            d= "LEFT"
            hitWall.play()
        }else if(e.keyCode =='38' && d!= "DOWN"){
            d= "UP"
            hitWall.play()
        }else if(e.keyCode == '39' && d!= "LEFT"){
            d= "RIGHT"
            hitWall.play()
        }else if(e.keyCode == '40' && d!= "UP"){
            d= "DOWN"
            hitWall.play()
        }



    })


    function collision(head,array){
        for (let i =0; i<array.length;i++){
            if  (head.x == array[i].x && head.y == array[i].y){
                return true
            }

        }return false
    }
})
document.getElementById("level3").addEventListener("click", function () {

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext("2d");
    const box = 20;
    let score = 0 ;
    const eat = new Audio();
    const hitWall = new Audio();
    const hitMe = new Audio();
    eat.src = "../assets/sounds/eat.mp3";
    hitWall.src = "../assets/sounds/hitWall.mp3";
    hitMe.src = "../assets/sounds/hitMe.mp3";



    const foodImg = new Image(20,20)

//TODO foodimg
    function foodImgFn (){
        foodImg.src = "../assets/img/snakeGame/food.png"
        foodImg .onload = function(){
            ctx.drawImage(foodImg , food.x, food.y);

        }}

    foodImgFn();

    let snake =[]
    snake[0]={
        x:12*box,
        y:10*box
    }
//TODO get food
    function random_food(min, max) {
        return Math.round((Math.random() * (max-min) + min) / box) * box;
    }

    let food ={
        x : random_food(0,canvas.width - box),
        y : random_food(0, canvas.height - box)
    }


    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < snake.length; i++) {
            var grd = ctx.createLinearGradient(0, 0, 170, 0);
            grd.addColorStop(0, "#cc0099");
            grd.addColorStop(1, "#ff66cc");
            ctx.fillStyle = grd;

            ctx.fillRect(snake[i].x, snake[i].y, box, box)
            ctx.strokeStyle = 'brown';
            ctx.strokeRect(snake[i].x, snake[i].y, box, box)
        }
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
        if(snakeX == food.x && snakeY == food.y){

            score++
            eat.play();
            document.getElementById('score').innerHTML = score;
            food ={
                x : random_food(0,canvas.width - box),
                y : random_food(0, canvas.height - box)
            }
        }else{
            snake.pop();
        }

        if(d == "LEFT") snakeX -= box;
        if(d == "UP") snakeY -= box;
        if(d == "RIGHT") snakeX += box;
        if(d =="DOWN") snakeY += box;

        let newHead ={
            x:snakeX,
            y:snakeY
        }
        if (score == 3){
            clearInterval(game)
        }
        if( snakeX< 0 || snakeY< 0 || snakeX >canvas.width- box || snakeY>canvas.height - box|| collision(newHead,snake) ) {
            hitMe.play();
            clearInterval(game)
        }

        snake.unshift(newHead);
        ctx.drawImage(foodImg , food.x, food.y);


    }

    let game = setInterval(draw,70)


    let d;
    document.addEventListener('keydown', function (e)  {
        if(e.keyCode == '37' && d!= "RIGHT"){

            d= "LEFT"
            hitWall.play()
        }else if(e.keyCode =='38' && d!= "DOWN"){
            d= "UP"
            hitWall.play()
        }else if(e.keyCode == '39' && d!= "LEFT"){
            d= "RIGHT"
            hitWall.play()
        }else if(e.keyCode == '40' && d!= "UP"){
            d= "DOWN"
            hitWall.play()
        }



    })


    function collision(head,array){
        for (let i =0; i<array.length;i++){
            if  (head.x == array[i].x && head.y == array[i].y){
                return true
            }

        }return false
    }
})
document.getElementById("playAgain").addEventListener("click", function () {
    location.reload();
})

