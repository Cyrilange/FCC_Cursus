const writeText = document.getElementById('text-input');
const counterText = document.getElementById('char-count');
const area = document.getElementById('char-count');
const maxChars = 50;

writeText.setAttribute('maxlength', maxChars); // Set the max length of the input field to 50

writeText.addEventListener('input', () => {
    const currentLength = writeText.value.length;
    counterText.textContent = `Character Count: ${currentLength}/${maxChars}`;

    if (currentLength < maxChars) {
        area.style.color = 'black';
    }
    else if (currentLength === maxChars) {
        area.style.color = 'red';
        writeText.value = writeText.value.slice(0, maxChars);
    }
    else if (currentLength > maxChars) {
        writeText.value = writeText.value.slice(0, maxChars);
    }
});