import { Game } from './game.js';

document.getElementById('game-settings').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const player1Color = document.getElementById('player1-color').value;
    const player2Color = document.getElementById('player2-color').value;
    
    const game = new Game(rows, cols, player1Color, player2Color);
    game.start();
});