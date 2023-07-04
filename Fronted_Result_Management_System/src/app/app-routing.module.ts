import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './student_loginuser/studentlogin/studentlogin.component';
import { TeacherloginComponent } from './teacher_loginuser/teacherlogin/teacherlogin.component';
import { AddstudentComponent } from './add_student/addstudent/addstudent.component';
import { EditstudentComponent } from './edit_student/editstudent/editstudent.component';
import { StudentlistComponent } from './student_list/studentlist/studentlist.component';
import { StudentresultComponent } from './student_result/studentresult/studentresult.component';
import { HomePageComponent } from './Home/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'student-login',component:StudentloginComponent},
  {path:'teacher-login',component:TeacherloginComponent},
  {path:'add-student',component:AddstudentComponent},
  {path:'edit/:roll_no',component:EditstudentComponent},
  {path:'getusers',component:StudentlistComponent},
  {path:'viewresult/:roll_no',component:StudentresultComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
