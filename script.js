const quotes = [
    "Kamu adalah alasan aku tersenyum setiap hari.",
    "Aku tidak bisa hidup tanpamu, kamu adalah segalanya bagiku.",
    "Cintaku padamu tak terbatas, seperti langit yang tak berujung.",
    "Kamu adalah mimpi yang menjadi kenyataan.",
    "Aku mencintaimu lebih dari apapun di dunia ini.",
    "Bersamamu, setiap hari adalah petualangan yang indah."
];

const quoteText = document.getElementById('quote-text');
const newQuoteButton = document.getElementById('new-quote');
const musicButton = document.getElementById('music-button');
const romanticMusic = document.getElementById('romantic-music');

// Fungsi untuk quotes baru
newQuoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
    quoteText.style.animation = 'slideIn 1s ease-in-out';
});

// Fungsi untuk memutar/menghentikan musik
musicButton.addEventListener('click', () => {
    if (romanticMusic.paused) {
        romanticMusic.play();
        musicButton.innerHTML = '<i class="fas fa-pause"></i> STOP';
    } else {
        romanticMusic.pause();
        musicButton.innerHTML = '<i class="fas fa-play"></i> PLAY';
    }
});

// Countdown timer
const countdownDate = new Date("2023-12-31T00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = "Waktunya sudah tiba! 🎉";
    }
}, 1000);

// Form pesan cinta
document.getElementById('love-message').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Pesan cinta terkirim! 💌");
});