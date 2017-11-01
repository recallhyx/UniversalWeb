import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.route";
import {MovieComponent} from "./movie/movie.component";
import {IdentityComponent} from "./identity/identity.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    IdentityComponent,
    WelcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
