import { Component, OnInit } from '@angular/core';
import { CollegeserviceService, College } from '../collegeservice.service';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent implements OnInit {

  
    service:CollegeserviceService;
    removedcollege: College[]=[];
    sai:boolean=false;
    sortByAsc: boolean = true;
      constructor(service:CollegeserviceService) {
        this.service=service;
        
       }
       college:College[]=[]
       delete(clgId:number)
       {
       this.removedcollege=this.service.delete(clgId);
        this.college=this.service.getCollege();
        this.sai=true;
       }
       column:string="clgId"; 
       order:boolean=true;
       sort(column:string){
       
         if(this.column==column )
         {
           this.order=!this.order;
         }else{
           this.order=true;
           this.column=column;
         }
       }
     
      ngOnInit() {
        this.service.fetchCollege();
        this.college=this.service.getCollege();
      }


      sortingid(parm){
        this.college.sort((a, b)=> {return a.collegeId - b.collegeId});
      }
      sortingname(parm){
        if(this.sortByAsc == true) {
          this.sortByAsc = false;
          this.college.sort((a, b) => {
           return a[parm].localeCompare(b[parm]);
          });
        } else {
          this.sortByAsc = true;
          this.college.sort((a, b) => {
            return b[parm].localeCompare(a[parm]);
         });
       }
      }
      sortingstate(parm){
        if(this.sortByAsc == true) {
          this.sortByAsc = false;
          this.college.sort((a, b) => {
           return a[parm].localeCompare(b[parm]);
          });
        } else {
          this.sortByAsc = true;
          this.college.sort((a, b) => {
            return b[parm].localeCompare(a[parm]);
         });
       }
      }
    
    }