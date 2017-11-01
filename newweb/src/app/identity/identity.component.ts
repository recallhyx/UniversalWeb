/**
 * Created by quceh_000 on 2017/10/25.
 */
import { Component } from '@angular/core';
import {AppService} from "../app.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'identity',
  templateUrl: './identity.component.html',
  //styleUrls: ['./app.component.css']
})
export class IdentityComponent {
  constructor(private appcomponent:AppComponent){
    appcomponent.title = '身份证信息查询'
  }
}
