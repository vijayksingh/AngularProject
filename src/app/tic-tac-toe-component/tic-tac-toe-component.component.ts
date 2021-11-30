import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-component',
  templateUrl: './tic-tac-toe-component.component.html',
  styleUrls: ['./tic-tac-toe-component.component.css']
})
export class TicTacToeComponentComponent implements OnInit {
  
  // Define a type for Move
  @Input() board;
  @Output() nextMove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 

  // Todo 
  // Implement a board
  // Implement two player event (Toggle between player 1 and player 2)
  // Implement moveEvent 

  // Board would be made of small squares
  // Square Component

}
