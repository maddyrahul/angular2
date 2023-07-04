import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultmanageserviceService } from 'src/app/resultmanageservice.service';

@Component({
  selector: 'app-studentresult',
  templateUrl: './studentresult.component.html',
  styleUrls: ['./studentresult.component.css']
})
export class StudentresultComponent implements OnInit {


  viewResult = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl(''),
    date_of_birth: new FormControl(''),
    score: new FormControl('')

  })


  get roll_no() { return this.viewResult.get('roll_no') }
  get name() { return this.viewResult.get('name') }
  get date_of_birth() { return this.viewResult.get('date_of_birth') }
  get score() { return this.viewResult.get('score') }

  constructor(private router: ActivatedRoute, private result: ResultmanageserviceService,private route:Router) { }

  r: any

  collection: any = [];
  
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.route.navigate(['/studentlogin']);
    }
    


    console.warn(this.router.snapshot.params['roll_no'])
    this.result.getresult(this.router.snapshot.params['roll_no']).subscribe((result) => {
        this.r = result


        this.collection = this.r["data"]
        console.warn(this.r.data)
   
        localStorage.setItem("logged","false")

      })
      
  }
  logout() {
    localStorage.setItem("logged", "false")
    this.route.navigate(['']);
  }
}

