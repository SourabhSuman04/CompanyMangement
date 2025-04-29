import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/EmployeeModel';
import { environment } from '../envernment/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient ) { }

  getEmployeeDetails(id:any)
  {
    let params = new HttpParams()
    .set('Id', id)
    return this.http.get<EmployeeModel>(environment.baseurl+'EmployeeDetails/GetEmployees/GetEmployees');
  }

  delete(id:any)
  {
    return this.http.delete(environment.baseurl+`EmployeeDetails/DeleteEmployeebyID/DeleteEmployee?id=${id}`)
  }

  Add(model:any)
  {
    return this.http.post(environment.baseurl+'EmployeeDetails/AddEmployeeDetails',model)
  }

  edit(id:number)
  {
    return this.http.get(environment.baseurl+`EmployeeDetails/GetEmployeeById/GetEmployeeById?id=${id}`)
  }
}
