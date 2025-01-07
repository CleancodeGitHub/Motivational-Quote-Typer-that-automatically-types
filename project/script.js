const quoteDisplay = document.getElementById('quote-display');
const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Strive not to be a success, but rather to be of value."
];

let quoteIndex = 0;
let charIndex = 0;

function typeQuote() {
    if (charIndex < quotes[quoteIndex].length) {
        quoteDisplay.textContent += quotes[quoteIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeQuote, 100);
    } else {
        setTimeout(eraseQuote, 2000);
    }
}

function eraseQuote() {
    if (charIndex > 0) {
        quoteDisplay.textContent = quotes[quoteIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseQuote, 50);
    } else {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        setTimeout(typeQuote, 1000);
    }
}

typeQuote();
