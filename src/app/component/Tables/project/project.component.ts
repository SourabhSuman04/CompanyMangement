import { Component } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule,RouterModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  data:any
  projects:any
  constructor(private project:ProjectsService,private loader:LoaderService)
  {

  }

ngOnInit() 
{
this.getProjects();
}

  getProjects()
  {
    this.loader.startLoader();
    this.project.getprojects().subscribe((res:any)=>
    {
      this.loader.stopLoader();
      this.projects=res.data;
    })
  }
   
  deleteproject(id:number)
  {
    this.project.Deleteproject(id).subscribe((res:any)=>
    {
      this.data=res
      alert(res.message)
    })
  }

  // Addproject()
  // {
  //   this.project.Addprojects(this.data).subscribe((res:any)=>{
  //     this.data=res;
  //   })
  // }
}
