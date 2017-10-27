import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.route";
import {MovieComponent} from "./movie/movie.component";
import {IdentityComponent} from "./identity/identity.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    IdentityComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
