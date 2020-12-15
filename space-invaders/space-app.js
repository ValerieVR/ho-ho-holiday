// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// DOMContentLoaded makes it load faster, loads without waiting for css, images and subframes
document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div");
    const resultDisplay = document.querySelector("#result");
    // 15 squared in the grid
    let width = 15;
    let currentShooterIndex = 202;
    let currentInvaderIndex = 0;
    let alienInvadersTakenDown = [];
    let result = 0;
    let direction = 1;
    let invaderId;

    // Define the alien invaders
    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ];

    // Draw the alien invaders by adding a class to the divs that should be aliens, then style with css
    alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add("invader"))

    // Draw the shooter by adding a class to the div that should be the shooter
    squares[currentShooterIndex].classList.add("shooter");

    // Move the shooter along a line
    function moveShooter(event) {
        squares[currentShooterIndex].classList.remove("shooter");
        switch (event.keyCode) {
            // 37 is left arrow
            case 37:
                if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
                break;
                // 39 is right arrow
            case 39:
                if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
        }
        squares[currentShooterIndex].classList.add("shooter");
    }
    // Event when a key is pressed
    // Keydown works for all keys, key press doesn't
    document.addEventListener("keydown", moveShooter);

    // Move the alien invaders
    function moveInvaders() {
        const leftEdge = alienInvaders[0] % width === 0;
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
            direction = width;
        } else if (direction === width) {
            if (leftEdge) direction = 1;
            else direction = -1;
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.remove("invader");
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction;
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (!alienInvadersTakenDown.includes(i)) {
                squares[alienInvaders[i]].classList.add("invader");
            }
        }
    }

});