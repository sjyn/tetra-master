import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainMenuRoutingModule} from './main-menu-routing.module';
import {MainMenuComponent} from './main-menu.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MainMenuRoutingModule,
  ],
  declarations: [
    MainMenuComponent,
    AboutComponent,
  ],
})
export class MainMenuModule {
}
