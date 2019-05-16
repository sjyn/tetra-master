import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainMenuComponent} from './main-menu.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuRoutingModule {
}
