document.getElementById('menu-btn').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block' || navMenu.style.display === '') {
        navMenu.style.maxHeight = '0';
        navMenu.style.opacity = '0';
        setTimeout(() => {
            navMenu.style.display = 'none';
        }, 300); // Match the duration of the transition
    } else {
        navMenu.style.display = 'block';
        navMenu.style.maxHeight = '500px'; // Arbitrary value to show full menu
        navMenu.style.opacity = '1';
    }
});

document.getElementById('new-quote').addEventListener('click', function () {
    const quotes = [
        "You always make me smile, even on the worst days.",
        "You believe in me when I doubt myself.",
        "You bring light into my life like no one else.",
        "I love the way you care for others.",
        "Your laughter is the sweetest sound I've ever heard.",
        "You inspire me to be a better person every day.",
        "You understand me even when I don't have the words.",
        "You are my biggest adventure and my safest place.",
        "I love your kind heart and gentle soul.",
        "You make even the ordinary feel extraordinary."
    ];

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Fade out current quote
    const quoteElement = document.getElementById('quote');
    quoteElement.style.opacity = '0';

    // After fade out, change quote and fade in
    setTimeout(() => {
        quoteElement.textContent = randomQuote;
        quoteElement.style.opacity = '1';
    }, 500); // Match the duration of the fade out
});
