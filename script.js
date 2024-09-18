let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties,
}

function playGame(playerMove){

    

    const computerMove = pickMove();
    
    let result = '';
    
    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result  = 'you lose';
        }
        else if(computerMove === 'paper'){
            result = 'you win.'
        }
        else if(computerMove === 'scissors'){
            result = 'tie'
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result  = 'you win.';
        }
        else if(computerMove === 'paper'){
            result = 'tie'
        }
        else if(computerMove === 'scissors'){
            result = 'you lose'
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result  = 'tie';
        }
        else if(computerMove === 'paper'){
            result = 'you lose'
        }
        else if(computerMove === 'scissors'){
            result = 'you win.'
        }
    }
    
    if(result === 'you win.'){
        score.wins += 1;
    }
    else if(result === 'you lose'){
        score.losses += 1;
    }
    else if(result === 'tie'){
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.select').innerHTML = result;

    document.querySelector('.para').innerHTML = `you ${playerMove} - Computer ${computerMove}`;

    let paraElement = document.querySelector('.sub')
    if(paraElement === 'Subscribe'){
        document.querySelector('.sub') = 'Subscribed';
    }
  }

  function updateScore(){
    document.querySelector('.move').innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function subScore(){
    let paraElement = document.querySelector('.sub')
    if(paraElement.innerText === 'Subscribe'){
        paraElement.innerHTML = 'Subscribed';
        paraElement.classList.add('isSub');
    }else{
        paraElement.innerHTML = 'Subscribe';
        paraElement.classList.remove('isSub');
    }
  }
   
    function pickMove(){
    const randomNumber = Math.random();
    let computerMove ='';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove = 'paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove = 'scissors';
        }
    return computerMove;
    }