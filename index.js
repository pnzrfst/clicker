let clicksQuantity = 0;
let coins = 0;

const stats = {
    clicksQuantity : 0,
    earnedCoins : 0,
    coinsPerMinutes : 0
};

// aumenta as coins baseado no true e na qtd que o booster fornece
function growCoinsPerClick(isActive, booster) {
    if (isActive) {
        const multipleCoins = coins * booster;
        stats.earnedCoins++;
    } else {
        return coins;
    }
}

// captura o clique, aumenta o coin e mostra na tela
document.getElementById("main-button").addEventListener("click", () => {
    coins++;
    clicksQuantity++;

    stats.clicksQuantity = clicksQuantity;
    stats.earnedCoins = coins;

    const qtdClicks = document.getElementById("cliques");
    qtdClicks.innerText = clicksQuantity;
});

// coleta coins automaticamente
function collectCoinsAutomatically(isActive) {
    if (!isActive) return

    setInterval(() => {
        coins++;
        stats.earnedCoins = coins;
    }, 1000);
}
