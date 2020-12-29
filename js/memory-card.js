const cards = document.querySelectorAll(".memory-card");

let audio = document.getElementById("audio");
let playMuteBTN = document.getElementById("playMuteBTN");
let playAgain = document.getElementById("play-again");
let count = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 

    secondCard = this;
        
    checkforMatch();
}

function checkforMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});


playMuteBTN.addEventListener("click", () => {
    if(count == 0) {
        count = 1;
        audio.play();
        playMuteBTN.innerHTML = "Pause music";
    } else {
        count = 0;
        audio.pause();
        playMuteBTN.innerHTML = "Play music";
    }
});

playAgain.addEventListener("click", () => {
    location.reload();
});





