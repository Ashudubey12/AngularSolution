import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Mobile} from '../mobile';
import { FormsModule } from '@angular/forms';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  mobileid: String;
  mobilename : String;
  mobileprice: String;
  mobilebrand: String;


  constructor(private Service : MobileService, private router: Router) { }

  ngOnInit() {
  }

  add()
  {
   console.log("welcomee")
   let mymobile =
    {
      mobileid: this.mobileid,
      mobilename :this.mobilename,
      mobileprice:this.mobileprice,
      mobilebrand:this.mobilebrand
    }

    this.Service.addMobile(mymobile)
    {
      console.log("in add mobile data",mymobile);
    }
 
    this.router.navigate(['/show']);
  }


}
