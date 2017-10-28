/**
 * Created by quceh_000 on 2017/10/25.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from "./movie/movie.component";
import {IdentityComponent} from "./identity/identity.component";
import {WelcomeComponent} from "./welcome/welcome.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path:'moviesearch',
    component: MovieComponent
  },
  {
    path:'identity',
    component: IdentityComponent
  },
  {
    path:'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
