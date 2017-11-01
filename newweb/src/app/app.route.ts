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
    pathMatch: 'full',
    data:{title:'UniversalWeb'}
  },
  {
    path:'moviesearch',
    component: MovieComponent,
    data:{title:'影视信息查询'}
  },
  {
    path:'identity',
    component: IdentityComponent,
    data:{title:'身份证信息查询'}
  },
  {
    path:'welcome',
    component: WelcomeComponent,
    data:{title:'UniversalWeb'}
  },
  {
    path:'**',
    component: WelcomeComponent,
    data:{title:'UniversalWeb'}
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
