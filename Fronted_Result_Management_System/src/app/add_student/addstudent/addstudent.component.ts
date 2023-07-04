import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultmanageserviceService } from 'src/app/resultmanageservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  addStudent = new FormGroup({
    roll_no: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    date_of_birth: new FormControl('', Validators.required),
    score: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),

  })

  error = false


  get roll_no() { return this.addStudent.get('roll_no') }
  get name() { return this.addStudent.get('name') }
  get date_of_birth() { return this.addStudent.get('date_of_birth') }
  get score() { return this.addStudent.get('score') }

  constructor(private router: ActivatedRoute, private result: ResultmanageserviceService, private routers: Router) { }
  
  successMsg:any
  r: any
  ngOnInit(): void {
    if (localStorage.getItem("logged") == "false") {
      this.routers.navigate(['/teacher-login']);
    }
  }
  add() {

    console.warn(this.addStudent.value)
    this.result.getAddStudent(this.addStudent.value).subscribe((result) => {
      console.log(result)
      this.r = result
      this.successMsg=result.message

      if (this.r["message"] == "Already exist") {
        this.error = true
        console.warn("Already exist")
      }
      else {
        this.routers.navigate(['/getusers']);
        console.warn("Added Successfully")
      }


    })

  }
  logout() {
    localStorage.setItem("logged", "false")
    this.routers.navigate(['']);
  }

}
