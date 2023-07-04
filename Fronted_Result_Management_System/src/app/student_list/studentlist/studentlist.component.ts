import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultmanageserviceService } from 'src/app/resultmanageservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private result: ResultmanageserviceService, private router: Router) { }

  r: any
  deleteSuccess: any
  collection: any = [];
  ngOnInit(): void {
    if (localStorage.getItem("logged") == "false") {
      this.router.navigate(['/teacher-login']);
    }
    this.result.getList().subscribe((result) => {
      console.warn(result)
      this.r = result
      this.collection = this.r["data"]

    })
  }

  delete(rollno: any) {
    this.deleteSuccess = "Deleted Successfully";
    this.result.delete(rollno).subscribe((result) => {
      this.result.getList().subscribe((result) => {
        console.warn(result)
        this.r = result
        this.collection = this.r["data"]
  
      })

    

    })
  }

  logout() {
    localStorage.setItem("logged", "false")
    this.router.navigate(['']);
  }

}
