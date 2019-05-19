import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: './pages/main-menu/main-menu.module#MainMenuModule',
  },
  {
    path: 'setup',
    loadChildren: './pages/pre-game/pre-game.module#PreGameModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
