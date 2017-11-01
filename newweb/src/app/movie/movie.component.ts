/**
 * Created by quceh_000 on 2017/10/25.
 */
import {Component, ElementRef} from '@angular/core';
import {AppService} from "../app.service";
import {AppComponent} from "../app.component";


@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  //styleUrls: ['./app.component.css']
})
export class MovieComponent {


  constructor(private appcomponent:AppComponent){
    appcomponent.title = '影视信息查询'
  }
  isVerticalCenter = true;
  isScaleOut = false;

  onClick(){
    this.isScaleOut = true;
    setTimeout(()=>{
      this.isVerticalCenter = false;
      this.isScaleOut = false;

    },1000)

  }

}
