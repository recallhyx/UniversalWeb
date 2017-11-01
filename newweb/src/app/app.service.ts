/**
 * Created by quceh_000 on 2017/10/31.
 */
import {Injectable} from '@angular/core'


@Injectable()
export class AppService{
  title:string = 'UniversalWeb'

  setTitle(title:string){
    this.title = title
  }
}
