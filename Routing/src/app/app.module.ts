import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { MobileService } from '../app/mobile.service';
import { FilterPipe} from './filter.pipe';

const routes: Routes = [
  {path: '', redirectTo: '/show', pathMatch: 'full'},
  {path:'show',component: ShowComponent},
  {path :'add', component : AddComponent}
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    AddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
