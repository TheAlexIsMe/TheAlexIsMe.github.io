function executeRitual() {
    const grid = document.getElementById('output');
    const box = document.getElementById('oracleBox');
    const aiText = document.getElementById('aiText');
    const count = parseInt(document.getElementById('drawNum').value);
    const cat = document.getElementById('readingCat').value;
    const q = document.getElementById('seekerQ').value.toUpperCase();
    const type = document.querySelector('input[name="deckType"]:checked').value;

    let deck = [];
    if(type === "Full") deck = [...MAJOR_ARCANA, ...MINOR_ARCANA];
    else if(type === "Major") deck = [...MAJOR_ARCANA];
    else deck = [...MINOR_ARCANA];

    grid.innerHTML = "";
    box.style.display = "none";

    // SHUFFLE ENGINE (Anti-repeat)
    let draw = [];
    let temp = [...deck];
    for(let i=0; i<count; i++) {
        const rand = Math.floor(Math.random() * temp.length);
        draw.push(temp.splice(rand, 1)[0]);
    }

    draw.forEach((card, i) => {
        const el = document.createElement('div');
        el.className = 'card';
        el.setAttribute('data-def', card.def);
        const img = card.img ? card.img : `https://placehold.jp/40/ffb7d5/000000/300x500.png?text=${card.name}`;
        el.innerHTML = `<img src="${img}"><div class="card-label">${card.name}</div>`;
        grid.appendChild(el);
        setTimeout(() => el.classList.add('active'), i * 300);
    });

    // AI NARRATIVE ENGINE
    setTimeout(() => {
        box.style.display = "block";
        let decree = q ? `IN RESPONSE TO YOUR QUERY "${q}"... ` : "THE ANCIENTS HAVE ALIGNED. ";
        
        if(count === 1) {
            decree += `The appearance of ${draw[0].name} ${draw[0].vibe}. Your path is absolute.`;
        } else {
            decree += `The presence of ${draw[0].name} ${draw[0].vibe} as your foundation. This energy flows through ${draw[1].name}, which ${draw[1].vibe}. Ultimately, the cycle concludes in the power of ${draw[draw.length-1].name}, which ${draw[draw.length-1].vibe}. Your ${cat} destiny is now illuminated.`;
        }
        aiText.innerText = decree;
        window.scrollTo({ top: box.offsetTop - 50, behavior: 'smooth' });
    }, (count * 300) + 500);
}
