import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreGameRoutingModule} from './pre-game-routing.module';
import {CardSelectionComponent} from './card-selection/card-selection.component';
import {SharedModule} from '../../components/shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LevelSelectComponent} from './level-select/level-select.component';
import {FormsModule} from '@angular/forms';
import {LevelCardComponent} from './level-select/level-card/level-card.component';

@NgModule({
  imports: [
    CommonModule,
    PreGameRoutingModule,
    SharedModule,
    DragDropModule,
    FormsModule,
  ],
  declarations: [
    CardSelectionComponent,
    LevelSelectComponent,
    LevelCardComponent,
  ],
})
export class PreGameModule {
}
