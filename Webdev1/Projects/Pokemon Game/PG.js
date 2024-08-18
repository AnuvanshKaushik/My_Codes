const playerHealthBar = document.getElementById('player-health');
const opponentHealthBar = document.getElementById('opponent-health');
const messageBox = document.getElementById('message-box');

let playerHealth = 100;
let opponentHealth = 100;

function playerAttack(move) {
    let damage = 0;
    if (move === 'Thunder Shock') {
        damage = getRandomDamage(10, 20);
    } else if (move === 'Quick Attack') {
        damage = getRandomDamage(5, 15);
    }

    opponentHealth -= damage;
    if (opponentHealth < 0) opponentHealth = 0;

    updateHealthBars();
    displayMessage(`Pikachu used ${move}! It dealt ${damage} damage.`);

    if (opponentHealth === 0) {
        displayMessage("Charmander fainted! You win!");
        disableButtons();
        return;
    }

    setTimeout(opponentAttack, 1000);
}

function opponentAttack() {
    const moves = ['Scratch', 'Ember'];
    const move = moves[Math.floor(Math.random() * moves.length)];
    let damage = 0;

    if (move === 'Scratch') {
        damage = getRandomDamage(5, 15);
    } else if (move === 'Ember') {
        damage = getRandomDamage(10, 20);
    }

    playerHealth -= damage;
    if (playerHealth < 0) playerHealth = 0;

    updateHealthBars();
    displayMessage(`Charmander used ${move}! It dealt ${damage} damage.`);

    if (playerHealth === 0) {
        displayMessage("Pikachu fainted! You lose!");
        disableButtons();
    }
}

function updateHealthBars() {
    playerHealthBar.style.width = playerHealth + '%';
    opponentHealthBar.style.width = opponentHealth + '%';
}

function displayMessage(message) {
    messageBox.textContent = message;
}

function disableButtons() {
    const buttons = document.querySelectorAll('.move-button');
    buttons.forEach(button => button.disabled = true);
}

function getRandomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
