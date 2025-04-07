const letterText = document.querySelector('.letter-container');
letterText.style.opacity = 0;
let opacity = 0;

function fadeIn() {
    opacity += 0.01;
    letterText.style.opacity = opacity;
    if (opacity < 1) {
        requestAnimationFrame(fadeIn);
    }
}

fadeIn();
