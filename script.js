const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let blockBoard = false;

function flipCard(){
    if(blockBoard) return;
    if(this === firstCard ) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCads();
        return;
    }
    unflipCards();
}

function disableCads(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    resetBorad();
}

function unflipCards(){
    blockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        blockBoard = false;
        resetBorad();
    },1500);
}


function resetBorad(){
    hasFlippedCard, blockBoard = (false, false);
    firstCard, secondCard = (null, null);

}


(function shuffle(){
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();

cards.forEach((card) => {
    card.addEventListener('click',flipCard);
});

