import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegeserviceService {
  http: HttpClient;
  college: College[] = [];
  removedCollege: College[] = [];
  constructor(http: HttpClient) {
    this.http = http;
  }
  fetched: boolean = false; 
  fetchCollege() {
    this.http.get('./assets/college.json')
      .subscribe(
        data => {
          if (!this.fetched) {
            this.convert(data);
            this.fetched = true;
          }
        });
  }

  getCollege(): College[] {
    return this.college;
  }

  convert(data: any) {
    for (let o of data) {
      let c = new College(o.collegeId, o.collegeName, o.state);
      this.college.push(c);

    }
  }
  delete(clgId: number) {
    let foundIndex: number = -1;
    for (let i = 0; i < this.college.length; i++) {
      let c = this.college[i];
      if (clgId == c.collegeId) {
        foundIndex = i;
        break;
      }
    }
  this.removedCollege= this.college.splice(foundIndex, 1);
   return this.removedCollege;
  }
}
  export class College {
    collegeId: number;
    collegeName: string;
    state:string
    constructor(collegeId: number, collegeName: string, state:string) {
      this.collegeId = collegeId;
      this.collegeName = collegeName;
      this.state=state;
    }
  }
