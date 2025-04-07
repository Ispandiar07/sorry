const textElements = document.querySelectorAll('.typing-text');
let textIndex = 0;

function typeWriter(element, text, i, delay) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1, delay), delay);
    } else if (textIndex < textElements.length - 1) {
        textIndex++;
        setTimeout(() => startTyping(), delay);
    }
}

function startTyping() {
    const currentElement = textElements[textIndex];
    const text = currentElement.textContent;
    currentElement.textContent = '';
    typeWriter(currentElement, text, 0, 50); // Измени 50, чтобы изменить скорость печати
}

startTyping();
