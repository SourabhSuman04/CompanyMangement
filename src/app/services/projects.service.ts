import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/projects';
import { environment } from '../envernment/environment';
import { ApiResponse } from '../helper/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getprojects()
  {
    return this.http.get<Project>(environment.baseurl+"ProjectsDetails/GetAllProjects")
  }
  Deleteproject(id:number)
  {
    return this.http.delete(environment.baseurl + `ProjectsDetails/DeleteProject?id=${id}`)
  }

  Addprojects(model:any)
  {
    console.log(model);
    return this.http.post(environment.baseurl+"ProjectsDetails/AddOrUpdateProject",model)
  }

  getProjectbyid(id:number)
  {
    return this.http.get(environment.baseurl+`ProjectsDetails/GetProjectById?id=${id}`)
  }
}
