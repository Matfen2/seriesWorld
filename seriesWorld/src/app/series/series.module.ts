import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShowComponent } from './main-show/main-show.component';
import { Routes, RouterModule } from '@angular/router';
import { GotShowComponent } from './got-show/got-show.component';
import { ExpanseShowComponent } from './expanse-show/expanse-show.component';
import { StrangerShowComponent } from './stranger-show/stranger-show.component';

const routesSeries : Routes = [
  {path: '', redirectTo: '/main-show', pathMatch: 'full'},
  {path: 'main-show', component: MainShowComponent},
  {path: 'got-show', component: GotShowComponent},
  {path: 'expanse-show', component: ExpanseShowComponent},
  {path: 'strnager-show', component: StrangerShowComponent},
]

@NgModule({
  declarations: [
    MainShowComponent,
    GotShowComponent,
    ExpanseShowComponent,
    StrangerShowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesSeries),
  ]
})
export class SeriesModule { }
