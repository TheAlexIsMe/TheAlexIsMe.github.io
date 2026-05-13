// Database of cards - Add all 78 here!
const tarotDeck = [
    { name: "The Fool", image: "images/fool.jpg", meaning: "New beginnings, optimism, and trust in the universe." },
    { name: "The Magician", image: "images/magician.jpg", meaning: "Manifestation, resourcefulness, and personal power." },
    { name: "The High Priestess", image: "images/priestess.jpg", meaning: "Intuition, sacred knowledge, and the subconscious mind." },
    { name: "The Lovers", image: "images/lovers.jpg", meaning: "Harmony, relationships, and values alignment." },
    { name: "Death", image: "images/death.jpg", meaning: "Endings, change, transformation, and transitions." }
    // Add more card objects here...
];

const aiTemplates = {
    relationship: "Regarding your heart's desire... the spirits suggest ",
    money: "In terms of gold and prosperity, the veil shows ",
    luck: "The winds of fate blow in your favor, revealing ",
    general: "The universe speaks clearly today: "
};

function performReading() {
    const spread = document.getElementById('spreadType').value;
    const theme = document.getElementById('readingType').value;
    const question = document.getElementById('userQuestion').value;
    const display = document.getElementById('readingDisplay');
    const aiText = document.getElementById('aiResponse');

    display.innerHTML = ""; // Clear old cards
    
    let cardsToDraw = (spread === 'single') ? 1 : 3;
    let selectedCards = [];

    // Shuffle and pick
    for(let i = 0; i < cardsToDraw; i++) {
        let randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
        selectedCards.push(randomCard);
        
        // Add to UI
        display.innerHTML += `
            <div class="card">
                <img src="${randomCard.image}" alt="${randomCard.name}">
                <p style="text-align:center; color:#d4af37">${randomCard.name}</p>
            </div>
        `;
    }

    // Generate "AI" Interpretation
    let interpretation = aiTemplates[theme];
    interpretation += selectedCards.map(c => c.meaning).join(" Combined with ");
    
    if(question) {
        interpretation = `Your question: "${question}" has been heard. ` + interpretation;
    }

    document.getElementById('aiTitle').innerText = "The Oracle Speaks:";
    aiText.innerText = interpretation;
}
