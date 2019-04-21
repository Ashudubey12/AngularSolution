import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegelistComponent } from './collegelist/collegelist.component';

const routes: Routes = [
  {
    path:'app-collegelist',
    component:CollegelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
