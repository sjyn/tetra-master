import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LevelSelectComponent} from './level-select/level-select.component';
import {CardSelectionComponent} from './card-selection/card-selection.component';
import {ProfileSelectionComponent} from './profile-selection/profile-selection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
  },
  {
    path: 'profile',
    component: ProfileSelectionComponent,
  },
  {
    path: 'level',
    component: LevelSelectComponent,
  },
  {
    path: 'card-select',
    component: CardSelectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreGameRoutingModule {
}
