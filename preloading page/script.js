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
    }else{
        per =per+4
        count = count + 1;
        progress.style.width = per + 'px'
        percent.textContent = "LOADING..."
    }
}