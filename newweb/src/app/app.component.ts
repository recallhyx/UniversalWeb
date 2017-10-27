import {Component, ElementRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private el:ElementRef){}


  onHide(){
    this.el.nativeElement.querySelector('#maodian').click();
  }
}

