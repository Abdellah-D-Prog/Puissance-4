export class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));
    }

    render() {
        const boardElement = document.getElementById('game-board');
        boardElement.innerHTML = '';
        boardElement.style.display = 'grid';
        boardElement.style.gridTemplateColumns = `repeat(${this.cols}, 50px)`;
        boardElement.style.gap = '5px';
    
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = r;  
                cell.dataset.col = c;  
                boardElement.appendChild(cell);
            }
        }
    }
    

    setClickHandler(callback) {
        document.getElementById('game-board').addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                callback(parseInt(event.target.dataset.col));
            }
        });
    }

    dropDisc(col, playerId) {
        for (let r = this.rows - 1; r >= 0; r--) {  
            if (!this.grid[r][col]) {
                this.grid[r][col] = playerId;
                this.updateBoard();
                return true;
            }
        }
        return false;  
    }
    

    updateBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            const col = parseInt(cell.dataset.col);
            const row = parseInt(cell.dataset.row);
            if (this.grid[row][col]) {
                cell.style.backgroundColor = this.grid[row][col] === 1 ? 'red' : 'yellow';
            }
        });
    }
    

    checkWin(playerId) {

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c <= this.cols - 4; c++) {
                if (this.grid[r][c] === playerId &&
                    this.grid[r][c + 1] === playerId &&
                    this.grid[r][c + 2] === playerId &&
                    this.grid[r][c + 3] === playerId) {
                    return true;
                }
            }
        }
    

        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r <= this.rows - 4; r++) {
                if (this.grid[r][c] === playerId &&
                    this.grid[r + 1][c] === playerId &&
                    this.grid[r + 2][c] === playerId &&
                    this.grid[r + 3][c] === playerId) {
                    return true;
                }
            }
        }
    
       
        for (let r = 0; r <= this.rows - 4; r++) {
            for (let c = 0; c <= this.cols - 4; c++) {
                if (this.grid[r][c] === playerId &&
                    this.grid[r + 1][c + 1] === playerId &&
                    this.grid[r + 2][c + 2] === playerId &&
                    this.grid[r + 3][c + 3] === playerId) {
                    return true;
                }
            }
        }
    
        for (let r = 3; r < this.rows; r++) {
            for (let c = 0; c <= this.cols - 4; c++) {
                if (this.grid[r][c] === playerId &&
                    this.grid[r - 1][c + 1] === playerId &&
                    this.grid[r - 2][c + 2] === playerId &&
                    this.grid[r - 3][c + 3] === playerId) {
                    return true;
                }
            }
        }
    
        return false;
    }
    
}