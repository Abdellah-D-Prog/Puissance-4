import { Board } from './board.js';
import { Player } from './player.js';

export class Game {
    constructor(rows, cols, player1Color, player2Color) {
        this.board = new Board(rows, cols);
        this.players = [new Player(1, player1Color), new Player(2, player2Color)];
        this.currentPlayerIndex = 0;
    }

    start() {
        this.board.render();
        this.board.setClickHandler(this.handleMove.bind(this));
    }

    handleMove(col) {
        if (this.board.dropDisc(col, this.players[this.currentPlayerIndex].id)) {
            if (this.board.checkWin(this.players[this.currentPlayerIndex].id)) {
                setTimeout(() => alert(`Joueur ${this.players[this.currentPlayerIndex].id} a gagné !`), 100);
                return;
            }
            this.currentPlayerIndex = 1 - this.currentPlayerIndex;
        }
    }
    
}