import { Component, OnInit } from '@angular/core';
import {Mobile} from '../mobile';
import { MobileService } from '../mobile.service';
import { FilterPipe } from '../filter.pipe'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  mobile : Mobile[] = [];
 
  public searchText:any;

  constructor( private Service : MobileService) {
  this.mobile = this.Service.getMobile();
   }

  ngOnInit() {
    console.log("search text is",this.searchText)
  }

  

  onDelete(id)
  {
    this.Service.onDel(id);
  }
  

}
