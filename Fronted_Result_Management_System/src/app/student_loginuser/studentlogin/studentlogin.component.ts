import { Component,OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultmanageserviceService } from 'src/app/resultmanageservice.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  studentLogin = new FormGroup({
   
    roll_no: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required)
  })
  error :any

 
  get roll_no() { return this.studentLogin.get('roll_no') }
  get date_of_birth() { return this.studentLogin.get('date_of_birth') }

  constructor(private result: ResultmanageserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  res: any
  res1: any
  login() {
    this.result.getStudent(this.studentLogin.value).subscribe((result) => {
      console.log(result)
      console.warn(this.studentLogin.value)
      this.res = result
      this.res1 = this.studentLogin.value 

      if (this.res["message"] == "valid") {
        localStorage.setItem("logged", "true")
        this.router.navigate(['/viewresult/' + this.res1.roll_no]);
      }
      else
        this.error = "Wrong Credentials";


    })


  }
}
