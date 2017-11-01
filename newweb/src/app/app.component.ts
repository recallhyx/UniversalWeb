import {Component, ElementRef} from '@angular/core';
import {AppService} from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private el:ElementRef,public appservice:AppService){

  }
  name = 'recall';
  email = 'quce.hu@qq.com';
  title='UniversalWeb';
  onHide(){
    this.el.nativeElement.querySelector('#maodian').click();
  }

}

