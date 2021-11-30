import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeContainerComponent } from './tic-tac-toe-container.component';

describe('TicTacToeContainerComponent', () => {
  let component: TicTacToeContainerComponent;
  let fixture: ComponentFixture<TicTacToeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
