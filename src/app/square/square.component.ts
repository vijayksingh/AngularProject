import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoveType } from '../tic-tac-toe-container/tic-tac-toe-container.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() square: MoveType;

  @Output() nextMove = new EventEmitter();






}
