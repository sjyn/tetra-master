import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreGameComponent} from './pre-game.component';

const routes: Routes = [
  {
    path: ':isAi',
    component: PreGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreGameRoutingModule {
}
