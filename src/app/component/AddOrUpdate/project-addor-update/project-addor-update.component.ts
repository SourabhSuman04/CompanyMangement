import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { from } from 'rxjs';
import { Project } from '../../../model/projects';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-addor-update',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-addor-update.component.html',
  styleUrl: './project-addor-update.component.css'
})
export class ProjectAddorUpdateComponent implements OnInit{
  form: FormGroup;
  id:number=0
  projectData: Project = new Project();
  constructor(private project: ProjectsService, private fb: FormBuilder,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    if(this.id)
      this.getProjectdeatils(this.id)
    else
   this.createForm()
  }

  createForm(data?:any) {
    this.form = this.fb.group({
      id: [data ? data.id:'', [Validators.required]],
      projectName: [data ? data.projectName:'', [Validators.required]],
      deptID: [data?data.deptID:'', [Validators.required]],
      startDate: [data?data.startDate:'', [Validators.required]],
      endDate: [data?data.endDate:'', [Validators.required]]
    })
  }

  getProjectdeatils(id:number)
  {
this.project.getProjectbyid(id).subscribe((res:any)=>
{
  this.createForm(res.data);
})
  }

  onSubmit() {
    const data=this.form.value
    if (data!=null) {
      data.id=this.id;

      console.log('Form Submitted!', this.form.value);
      this.project.Addprojects(this.form.value).subscribe((res: any) => {
        this.projectData = res.data;
      })
    } else {
      console.log('Form is invalid');
      // You can mark all fields as touched if you want to show validation errors
      this.form.markAllAsTouched();
    }
  }


}
