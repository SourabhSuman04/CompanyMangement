import { Component } from '@angular/core';
import { EmployeeModel } from '../../model/EmployeeModel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoService } from '../../footer/demo.service';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {


    employee: EmployeeModel = new EmployeeModel();
  membardata:any;
    fields = [
      { key: 'FullName', label: 'Full Name', type: 'text', required: true },
      { key: 'Email', label: 'Email', type: 'email', required: true },
      { key: 'PhoneNo', label: 'Phone Number', type: 'tel', required: true },
      { key: 'Address', label: 'Address', type: 'text', required: false },
      { key: 'Pincode', label: 'Pincode', type: 'text', required: false },
      { key: 'DeptID', label: 'Department ID', type: 'number', required: true },
      { key: 'DesigID', label: 'Designation ID', type: 'number', required: true },
      { key: 'City', label: 'City', type: 'text', required: false },
      { key: 'state', label: 'State', type: 'text', required: false },
      { key: 'Gender', label: 'Gender', type: 'text', required: true },
      { key: 'Qualification', label: 'Qualification', type: 'text', required: false },
      { key: 'Citizen', label: 'Citizen', type: 'text', required: false },
      { key: 'PanNO', label: 'PAN Number', type: 'text', required: false },
      { key: 'Exp', label: 'Experience', type: 'text', required: false },
      { key: 'HireDate', label: 'Hire Date', type: 'date', required: true },
      { key: 'DOB', label: 'Date of Birth', type: 'date', required: true },
      { key: 'language', label: 'Language', type: 'text', required: false },
      { key: 'skills', label: 'Skills', type: 'text', required: false },
      { key: 'QualificationMarks', label: 'Qualification Marks', type: 'number', required: false },
      { key: 'Nominee', label: 'Nominee', type: 'text', required: false },
      // {
      //   key: 'IsActive',
      //   label: 'Is Active',
      //   type: 'select',
      //   required: false,
      //   options: [
      //     { label: 'Yes', value: true },
      //     { label: 'No', value: false }
      //   ]
      // }
      { key: 'IsActive', label: 'Is Active', type: 'checkbox', required: false }

      ,
      { key: 'MarTialstatus', label: 'Marital Status', type: 'text', required: false }
    ];
  constructor(private emp:DemoService)
  {

  }
    onSubmit(formData: any) {
      console.log('Submitted Employee Data:', formData);
      // Add your save API call here
      formData.IsActive=true;
      this.emp.Add(formData).subscribe((res:any)=>{
        this.membardata=res;
        console.log(this.membardata);
        alert(res.message)
      })
    }
  }
  

