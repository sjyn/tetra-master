import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileGuard} from './guards/profile/profile.guard';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: './pages/main-menu/main-menu.module#MainMenuModule',
    canActivate: [ProfileGuard],
  },
  {
    path: 'setup',
    loadChildren: './pages/pre-game/pre-game.module#PreGameModule',
    canActivate: [ProfileGuard],
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
  },
  {
    path: 'game',
    loadChildren: './pages/game/game.module#GameModule',
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
