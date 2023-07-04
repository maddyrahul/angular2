import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultmanageserviceService {

  apiUrl="http://localhost:4300/";

  constructor(private http:HttpClient) { }

  getStudent(data: any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`+"student-login",data);

  }

  
  getresult(roll_no: any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}`+"viewresult/"+roll_no);

  }

  getTeacher(data: any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`+"teacher-login",data);
    
  }

  getList():Observable<any>
  {
    return this.http.get(`${this.apiUrl}`+"getusers");

  }

  getedit(data :any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`+"edit",data);

  }

  delete(roll_no: any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}`+"delete/"+roll_no);

  }

  getAddStudent(data:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`+"add-student",data);
  }





}
