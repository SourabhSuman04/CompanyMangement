import { Component } from '@angular/core';
import { DemoService } from '../../../footer/demo.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../services/loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee: any
  res: any
  constructor(private emp: DemoService, private router: Router,private loader:LoaderService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loader.startLoader();
    this.emp.getEmployeeDetails(1).subscribe((res: any) => {
      this.loader.stopLoader();
      this.employee = res;
      console.log(this.employee)
    })
  }

  delete(id: number) {
    console.log('id', id)
    alert("confirm")
    this.emp.delete(id).subscribe((res: any) => {
      this.res = res
      alert("res.message");
      console.log(res)
    })
  }

  Add() {
    this.router.navigate(['/Add'])
  }

  Edit(id: number) {
    this.router.navigate(['/edit', id])
  }
}
