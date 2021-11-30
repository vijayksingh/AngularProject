import { Component, OnInit } from '@angular/core';

type PossibleMove = 'X' | 'O';
export type MoveType = { boardIndex: number; boardState: PossibleMove };

@Component({
  selector: 'app-tic-tac-toe-container',
  templateUrl: './tic-tac-toe-container.component.html',
  styleUrls: ['./tic-tac-toe-container.component.css'],
})
export class TicTacToeContainerComponent implements OnInit {
  public board;
  public row = [];
  public boardSize: number = 3;
  public totalMoves: number = 0;
  public isGameOver: boolean = false;
  public hasWon: boolean;
  public isDraw: boolean;
  public activePlayer: PossibleMove = 'X';

  public move: MoveType;

  constructor() {}

  ngOnInit(): void {
    this.createBoard();
  }

  // Create board
  public createBoard() {
    this.board = [];
    for (let i = 0; i < this.boardSize; i++) {
      let row = [];
      for (let j = 0; j < this.boardSize; j++) {
        this.totalMoves++;
        row.push({ boardIndex: this.totalMoves, boardState: null });
      }
      this.board.push(row);
    }
  }

  // Change Player Turn

  // Update Boards State
  public updateBoardState(move: MoveType) {
    if (!this.isGameOver) {
      const { boardIndex } = move;
      for (let row = 0; row < this.boardSize; row++) {
        for (let col = 0; col < this.boardSize; col++) {
          if (this.board[row][col].boardIndex === boardIndex) {
            if (this.board[row][col].boardState === null) {
              this.board[row][col].boardState = this.activePlayer;
              this.isWinner();
              this.changePlayer();
            }
          }
        }
      }
    }
  }

  // Update the player turn
  public changePlayer() {
    if (!this.isGameOver) {
      if (this.activePlayer === 'X') {
        this.activePlayer = 'O';
      } else {
        this.activePlayer = 'X';
      }
    }
  }

  // Determine if game is over
  public gameOver() {
    if (this.isDraw || this.hasWon) {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }

  // Determine winner state
  public isWinner() {
    // For a particular player if the diagonals are same
    /*
    ['0,0' '0,2]
    [' '1,1' ']
    ['2,0' '2,2]


    // For a particular player if the rows or columns are same
  */

    this.checkDiagonalState();
    this.checkRows();
  }

  // The following function will work for n size of board
  public checkDiagonalState() {
    // Check diagonal 1
    const state = this.board[0][0].boardState;
    console.log(state);
    for (let i = 0; i < this.boardSize; i++) {
      console.log(this.board[i][i].boardState);
      if (this.board[i][i].boardState !== state) {
        this.hasWon = false;
        return;
      }
    }
    // For Diagonal 2
    for (let i = this.boardSize - 1; i >= 0; i--) {
      console.log(this.board[i][i].boardState);
      if (this.board[i][i].boardState !== state) {
        this.hasWon = false;
        return;
      }
    }
    this.hasWon = true;
    this.isGameOver = true;
  }

  public checkRows() {
    // Pick rows
  }

  // Determine draw state
  public isDrawen() {
    if (!this.hasWon && !this.totalMoves) {
      this.isDraw = true;
    }
  }
}
