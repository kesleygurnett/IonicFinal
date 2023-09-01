import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'chapter19',
    loadChildren: () => import('./chapter19/chapter19.module').then( m => m.Chapter19PageModule)
  },
  {
    path: 'chapter',
    loadChildren: () => import('./chapter/chapter.module').then( m => m.ChapterPageModule)
  },
  {
    path: 'chapter10',
    loadChildren: () => import('./chapter10/chapter10.module').then( m => m.Chapter10PageModule)
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
