import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter19PageRoutingModule } from './chapter19-routing.module';

import { Chapter19Page } from './chapter19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter19PageRoutingModule
  ],
  declarations: [Chapter19Page]
})
export class Chapter19PageModule {}
