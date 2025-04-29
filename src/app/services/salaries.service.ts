import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../envernment/environment';
import { Salaries } from '../model/Salaries';
import { ApiResponse } from '../helper/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  constructor(private http:HttpClient) { }

  getSalariesDetails()
  {
   return this.http.get<ApiResponse<Salaries>>(environment.baseurl+"EmployeeSalaries/GetAllSal");
  }

  DeleteSalary(id:number)
  {
   return this.http.delete<ApiResponse<Salaries>>(environment.baseurl+`EmployeeSalaries/DeleteSal?id=${id}`);
  }

  AddOrUpdate(model :any)
  {
   return this.http.post<ApiResponse<Salaries>>(environment.baseurl+"EmployeeSalaries/AddOrUpdateSal",model);
  }

  getSalariesbyId(id:number)
  {
    return this.http.get<ApiResponse<Salaries>>(environment.baseurl+`EmployeeSalaries/GetEmployeeSalById?id=${id}`)
  }
}
