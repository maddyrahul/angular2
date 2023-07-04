import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultmanageserviceService } from 'src/app/resultmanageservice.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
  teacherLogin = new FormGroup({
   
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  error :any

 
  get username() { return this.teacherLogin .get('username') }
  get password() { return this.teacherLogin .get('password') }

  constructor(private result: ResultmanageserviceService, private router: Router) { }
  ngOnInit(): void {

  }
  res:any
  login()
  {
    this.result.getTeacher(this.teacherLogin.value).subscribe((result)=>{
      console.warn(result)
      this.res=result

      if (this.res["message"]=="valid")
      {
        localStorage.setItem("logged","true")
        this.router.navigate(['/getusers']);
        
      }
     
      else
      this.error = "Wrong Credentials";
      
    })
  }
}
