// Selección de elementos
const rollDiceButton = document.getElementById("rollDice");
const diceImage = document.getElementById("dadoImage");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

// Inicialización
let currentPlayer = 1;
let scores = [0, 0];

// Función para lanzar el dado
function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1; // Número entre 1 y 6

  // Cambiar la imagen del dado
  diceImage.src = `dados/dado${diceValue}.png`;

  // Actualizar puntaje del jugador actual
  scores[currentPlayer - 1] += diceValue;

  // Actualizar marcador
  if (currentPlayer === 1) {
    score1.textContent = scores[0];
  } else {
    score2.textContent = scores[1];
  }

  // Cambiar al siguiente jugador
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Evento para el botón
rollDiceButton.addEventListener("click", rollDice);
