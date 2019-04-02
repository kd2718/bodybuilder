import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LandingComponent} from './nav/landing/landing.component';

import {NotFoundComponent} from './nav/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
