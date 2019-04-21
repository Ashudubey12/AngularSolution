import { Injectable } from '@angular/core';
import { Mobile} from '../app/mobile';
@Injectable({
  providedIn: 'root'
})
export class MobileService {

  public mobile: Mobile[] = new Array();  
  // mobModel: Mobile;


  constructor() { }

  details:any;

  addMobile(details)
  {
    this.mobile.push(details);
    console.log(this.mobile);
  
  }

  getMobile()
  {
    return this.mobile; 
  }

  onDel(mobileid) {
    const index: number = mobileid
    if (index !== -1) {
        this.mobile.splice(index, 1);
    }  
   }

}
