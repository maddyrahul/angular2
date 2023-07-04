import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './student_loginuser/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './teacher_loginuser/teacherlogin/teacherlogin.component';
import { AddstudentComponent } from './add_student/addstudent/addstudent.component';
import { EditstudentComponent } from './edit_student/editstudent/editstudent.component';
import { StudentlistComponent } from './student_list/studentlist/studentlist.component';
import { StudentresultComponent } from './student_result/studentresult/studentresult.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ResultmanageserviceService } from './resultmanageservice.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    TeacherloginComponent,
    AddstudentComponent,
    EditstudentComponent,
    StudentlistComponent,
    StudentresultComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [ResultmanageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
