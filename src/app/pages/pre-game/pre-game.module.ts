import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreGameRoutingModule} from './pre-game-routing.module';
import {CardSelectionComponent} from './card-selection/card-selection.component';
import {SharedModule} from '../../components/shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ProfileSelectionComponent} from './profile-selection/profile-selection.component';
import {LevelSelectComponent} from './level-select/level-select.component';
import { ProfileCardComponent } from './profile-selection/profile-card/profile-card.component';
import {FormsModule} from '@angular/forms';

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
    ProfileSelectionComponent,
    LevelSelectComponent,
    ProfileCardComponent,
  ],
})
export class PreGameModule {
}
