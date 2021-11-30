import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeContainerComponent } from './tic-tac-toe-container/tic-tac-toe-container.component';
import { TicTacToeComponentComponent } from './tic-tac-toe-component/tic-tac-toe-component.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeContainerComponent,
    TicTacToeComponentComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
