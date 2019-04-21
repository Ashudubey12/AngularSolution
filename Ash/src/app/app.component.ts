import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
import { MatSort, MatTableDataSource } from "@angular/material";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Ash";
  // mobNameList = [];
  // mobPriceList = [];
  // mobIdList = [];
  showTable: boolean;
  mobileList = [];
  deleteMessage: string;
  deleteModal: boolean;
  selectedItem: any;
  selectedItemName: any;
  sortByAsc: boolean = true;
  constructor(private AppService: AppService) {}
  ngOnInit() {

    this.getMobileList();
  }
  getMobileList() {
    let data = this.AppService.getMobileList();
    data["mobile"].forEach(element => {
      this.mobileList.push(element);
      // this.mobIdList.push(element["mobId"]);
      // this.mobNameList.push(element["mobName"]);
      // this.mobPriceList.push(element["mobPrice"]);
      console.log(element);
    });
  }
  
  deleteRow(id) {
   this.mobileList.splice(id, 1);
  
  }
    sortTable1(parm) {
      this.mobileList.sort((a, b)=> {return a.mobId - b.mobId});
     }
    sortTable(parm) {
      if(this.sortByAsc == true) {
        this.sortByAsc = false;
        this.mobileList.sort((a, b) => {
         return a[parm].localeCompare(b[parm]);
        });
      } else {
        this.sortByAsc = true;
        this.mobileList.sort((a, b) => {
          return b[parm].localeCompare(a[parm]);
       });
     }
    }
    sortTable2()
    {
      this.mobileList.sort((a, b)=> {return a.mobPrice - b.mobPrice});
    }

  
}
