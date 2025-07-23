const qtdClique = 0;

const stats = {
    qtdClicks : 0,
    earnedCoins : 0,
    coinsPerMinutes : 0
};

let coins = 0;

////// aumenta as coins baseado no true e na qtd que o booster fornece

function growCoinsPerClick(isActive, booster){
    if(isActive == true){
        const multipleCoins = coins * booster;
        stats.earnedCoins++;
    }else{
        return coins;
    }
}

///////////////captura o clique, aumenta o coin e mostra na tela
document.getElementById("main-button").addEventListener("click", ()=>{
    coins++;
    const qtdClicks = document.getElementById("cliques");
    stats.qtdClicks++;
    stats.earnedCoins++;
    qtdClicks.innerText = coins;
});

/////////////////// coleta coins automaticamente

let intervalID = null;

function collectCoinsAutomatically(isActve){
    if(isActve && intervalID === null){
        intervalID = setInterval(() => {
            coins++;
            stats.earnedCoins++;
        }, 1000);
    }else{
       return intervalID;
    }
}
