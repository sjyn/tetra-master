import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    BackButtonComponent,
  ],
  exports: [
    CardComponent,
    BackButtonComponent,
  ],
})
export class SharedModule {
}
