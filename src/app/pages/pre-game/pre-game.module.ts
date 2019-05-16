import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreGameRoutingModule} from './pre-game-routing.module';
import {PreGameComponent} from './pre-game.component';
import {CardSelectionComponent} from './card-selection/card-selection.component';
import {SharedModule} from '../../components/shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    PreGameRoutingModule,
    SharedModule,
    DragDropModule,
  ],
  declarations: [
    PreGameComponent,
    CardSelectionComponent,
  ],
})
export class PreGameModule {
}
