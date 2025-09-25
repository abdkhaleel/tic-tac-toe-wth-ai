import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public squares: any[] = [];
  public xIsNext: boolean = true;
  public winner: string | null = null;
  public gameMode: 'vsPlayer' | 'vsAI' = 'vsAI';

  constructor() {
    this.newGame(); 
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  setGameMode(mode: 'vsPlayer' | 'vsAI'): void {
    this.gameMode = mode;
    this.newGame();
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number): void {
    if (!this.squares[index] && !this.winner) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();

      if (!this.winner && !this.xIsNext && this.gameMode === 'vsAI') {
        this.aiMove();
      }
    }
  }

  aiMove(): void {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] === null) {
        this.squares[i] = 'O';
        let score = this.minimax(this.squares, false); 
        this.squares[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    if (bestMove !== -1) {
      this.makeMove(bestMove);
    }
  }

  minimax(board: any[], isMaximizing: boolean): number {
    const winner = this.checkWinner(board);
    if (winner) {
      if (winner === 'O') return 10;
      if (winner === 'X') return -10;
      if (winner === 'draw') return 0;
    }

    if (isMaximizing) { 
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O'; 
          let score = this.minimax(board, false);
          board[i] = null; 
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else { 
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X'; 
          let score = this.minimax(board, true);
          board[i] = null; 
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  calculateWinner(): string | null {
    return this.checkWinner(this.squares);
  }

  checkWinner(board: any[]): string | null {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }
    if (board.every(val => val !== null)) {
      return 'draw';
    }

    return null;
  }
}