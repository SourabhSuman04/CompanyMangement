import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../helper/apiresponse';
import { EmiInfo } from '../model/Emiinfo';
import { environment } from '../envernment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmiInfoService {

  constructor(private http: HttpClient) { }

  getEmiDetails() {
    return this.http.get<ApiResponse<EmiInfo>>(environment.baseurl + "EMIInfo/ALLEMI")
  }

  DeleteEmi(id: number) {
    return this.http.delete<ApiResponse<EmiInfo>>(environment.baseurl + 'EMIInfo/DeleteEMI/${id}')
  }
}
