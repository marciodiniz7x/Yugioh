const grid = document.querySelector('.grid');

const deck = [
    'darkMagician',
    'blueEyes',
    'raigeki',
    'meteorDragon',
    'chaosMagician',
    'swordsLight',
    'skullKnight',
    'mirrorForce',
    'downerdMagician',
    'summonedSkull',
    'babyDragon',
    'typhoon',
]

const criarElemento = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element
}

const criarCard = (monster) => {

    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    front.style.backgroundImage = `url(images/${monster}.png)`;

    card.appendChild(front);
    card.appendChild(back);

    // Um escutador de eventos que adiciona a classe girar que contém a animação de girar a carta.
    card.addEventListener('click', () => {
        card.classList.toggle('girar')
    })

    return card;

}

const loadDeck = () => {

    // const doubleDeck = [ ...deck, ...deck ];

    // const espalhaArray = doubleDeck.sort(() => Math.random() - 0.5);

    

    deck.forEach(monster => {

        let card = criarCard(monster);
        grid.appendChild(card);
        
    });
}

loadDeck();

