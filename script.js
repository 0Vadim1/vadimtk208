const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const leverBtn = document.getElementById('lever-btn');
const usernameInput = document.getElementById('username');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const resultMessage = document.getElementById('result-message');
const overlay = document.querySelector('.overlay');
const gameContainer = document.querySelector('.game-container');

const images = ['🍒', '🍊', '🍉', '🍋', '🍓']; 

let username = '';

startBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        overlay.style.display = 'none';
        gameContainer.style.display = 'block';
    } else {
        alert('Будь ласка, введіть ім\'я!');
    }
});


leverBtn.addEventListener('click', playGame);


restartBtn.addEventListener('click', () => {
    resultMessage.style.display = 'none';
    gameContainer.style.display = 'none';
    overlay.style.display = 'flex';
    usernameInput.value = ''; 
});


function generateRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}


function playGame() {
    let iteration = 0;
    const maxIterations = 10; 

    
    resultMessage.style.display = 'none';

    const interval = setInterval(() => {
        slot1.textContent = generateRandomImage();
        slot2.textContent = generateRandomImage();
        slot3.textContent = generateRandomImage();

        iteration++;
        if (iteration >= maxIterations) {
            clearInterval(interval);
            checkWin(); 
        }
    }, 200); 
}

function checkWin() {
    if (slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
        resultMessage.textContent = `${username}, ви виграли!`;
        resultMessage.style.color = "#32CD32"; 
        resultMessage.style.textShadow = "0 0 10px #32CD32, 0 0 20px #32CD32, 0 0 30px #32CD32"; 
    } else {
        resultMessage.textContent = `${username}, ви програли!`;
        resultMessage.style.color = "#FF6347"; 
        resultMessage.style.textShadow = "0 0 10px #FF6347, 0 0 20px #FF6347, 0 0 30px #FF6347"; 
    }
    resultMessage.style.display = 'block'; 
}


document.getElementById('lever-btn').addEventListener('click', function() {
    
    let result = Math.random() > 0.5 ? 'win' : 'lose'; 

   
    let resultMessage = document.getElementById('result-message');
    if (result === 'win') {
        resultMessage.textContent = 'Ви виграли!';
        resultMessage.classList.add('neon-win');
        resultMessage.classList.remove('neon-lose');
    } else {
        resultMessage.textContent = 'Ви програли!';
        resultMessage.classList.add('neon-lose');
        resultMessage.classList.remove('neon-win');
    }

  
    document.querySelector('.result').style.display = 'block';
});


function updateResultMessage(isWinner) {
    const resultMessage = document.getElementById('result-message');
    
    if (isWinner) {
        resultMessage.textContent = "Виграли!";
        resultMessage.style.color = "green"; 
    } else {
        resultMessage.textContent = "Програли!";
        resultMessage.style.color = "red"; 
    }
}

updateResultMessage(true); 


updateResultMessage(false); 
function showRules() {
    document.getElementById('rules-modal').style.display = 'flex';
}

function closeRules() {
    document.getElementById('rules-modal').style.display = 'none';
}

function startGame() {
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput.value.trim(); // Видалення пробілів на початку та в кінці
    const warning = document.getElementById('warning-message');

    if (playerName === '') {
       
        warning.textContent = 'Ім’я не може бути порожнім!';
        warning.style.display = 'block';
    } else if (playerName.length > 8) {
        
        warning.textContent = 'Ім’я не може бути довшим за 8 символів!';
        warning.style.display = 'block';
    } else {
      
        warning.style.display = 'none';
        alert(`Гра розпочата! Ласкаво просимо, ${playerName}!`);
      
    }
}
