import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter19Page } from './chapter19.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter19PageRoutingModule {}
