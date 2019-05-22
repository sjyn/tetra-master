import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import {BoardComponent} from './board/board.component';
import {GameComponent} from './game.component';
import {SharedModule} from '../../components/shared/shared.module';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
  ],
  declarations: [
    BoardComponent,
    GameComponent,
    DeckComponent,
  ],
})
export class GameModule {
}
