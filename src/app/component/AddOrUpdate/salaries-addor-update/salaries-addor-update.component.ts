import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalariesService } from '../../../services/salaries.service';
import { Salaries } from '../../../model/Salaries';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salaries-addor-update',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './salaries-addor-update.component.html',
  styleUrl: './salaries-addor-update.component.css'
})
export class SalariesAddorUpdateComponent {
  salaryForm: FormGroup;
  salarydata:Salaries=new Salaries();
  id:number=0
  constructor(private fb: FormBuilder,private salary:SalariesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // Initialize the form group
    this.id = Number(this.route.snapshot.params['loannumber']);
    if(this.id)
      this.getsalarybyid(this.id)
    else
   this.crateform()
  }

  crateform(data?:any)
  {
    this.salaryForm = this.fb.group({
      salaryID: [data?data.salaryID:'', Validators.required],
      empID: [data?data.empID:'', Validators.required],
      basicSalary: [data?data.basicSalary:'', [Validators.required, Validators.min(0)]],
      bonus: [data?data.bonus:'', [Validators.required, Validators.min(0)]],
      payDate: [data?data.payDate:'', Validators.required]
    });
  }

  onSubmit(): void {
    const salaryDetails = this.salaryForm.value;
    if (salaryDetails!=null) {
      salaryDetails.salaryID=this.id
      console.log('Form submitted:', salaryDetails);
      this.AddorUpdate(salaryDetails)
      // Handle form submission logic (e.g., send data to a server)
    }
  }

  AddorUpdate(model:any)
{
  this.salary.AddOrUpdate(model).subscribe((res:any)=>
  {
    this.salarydata=res.data;
  })
}

getsalarybyid(id:number)
{
  this.salary.getSalariesbyId(id).subscribe((res:any)=>
  {
    this.crateform(res.data)
  })
}
}
