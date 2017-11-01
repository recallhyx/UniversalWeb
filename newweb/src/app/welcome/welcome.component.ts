/**
 * Created by quceh_000 on 2017/10/27.
 */
import { Component } from '@angular/core';
import {AppService} from "../app.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  //styleUrls: ['./app.component.css']
})
export class WelcomeComponent {

  constructor(private appcomponent:AppComponent){
    appcomponent.title = 'UniversalWeb'
  }
}
