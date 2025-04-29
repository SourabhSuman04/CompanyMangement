import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../footer/demo.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../model/EmployeeModel';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  memberData: any;
  id: number;
  employee: EmployeeModel = new EmployeeModel();

  membardata: any;
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

  constructor(private emp: DemoService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    if (this.id)
      this.detail();
  }

  detail() {
    this.emp.edit(this.id).subscribe((res: any) => {
      this.memberData = res.data
      console.log(this.memberData)

      this.employee.Id = this.memberData.id;
      this.employee.FullName = this.memberData.fullName;
      this.employee.Email = this.memberData.email;
      this.employee.PhoneNo = this.memberData.phoneNo;
      this.employee.Address = this.memberData.address;
      this.employee.Pincode = this.memberData.pincode;
      this.employee.DeptID = this.memberData.deptID;
      this.employee.DesigID = this.memberData.desigID;
      this.employee.City = this.memberData.city;
      this.employee.state = this.memberData.state
      this.employee.Gender = this.memberData.gender;
      this.employee.Qualification = this.memberData.qualification
      this.employee.Citizen = this.memberData.citizen;
      this.employee.PanNO = this.memberData.panNO
      this.employee.Exp = this.memberData.exp
      this.employee.HireDate = this.memberData.hireDate;
      this.employee.DOB = this.memberData.dob;
      this.employee.language = this.memberData.language;
      this.employee.skills = this.memberData.skills
      this.employee.QualificationMarks = this.memberData.qualificationMarks
      this.employee.Nominee = this.memberData.nominee;
      this.employee.IsActive = this.memberData.isActive
      this.employee.MarTialstatus = this.memberData.marTialstatus
    })
  }

  onSubmit(formData: any) {
    console.log('Submitted Employee Data:', formData);
    formData.Id = this.employee.Id
    formData.IsActive = true;
    this.emp.Add(formData).subscribe((res: any) => {
      this.membardata = res.data;
      console.log(this.membardata);
      alert(res.message)
    })
  }
}
