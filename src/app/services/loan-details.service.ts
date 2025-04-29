import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../envernment/environment';
import { ApiResponse } from '../helper/apiresponse';
import { LoanInfo } from '../model/loanmodel';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {

  constructor(private http:HttpClient) { }

  getDetails()
  {
    return this.http.get<ApiResponse<LoanInfo>>(environment.baseurl+"Loan/GetAllLoans")
  }

  Delete(id:number)
  {
    return this.http.delete(environment.baseurl + `Loan?id=${id}`)
  }

  Add(model:any)
  {
    return this.http.post(environment.baseurl+"Loan/AddLoan",model)
  }

  getDeatilsById(loannumber:number)
  {
    return this.http.get(environment.baseurl+`Loan/GetLoanById?loannumber=${loannumber}`)
  }
}
