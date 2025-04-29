import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanDetailsService } from '../../../services/loan-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-addor-update',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loan-addor-update.component.html',
  styleUrl: './loan-addor-update.component.css'
})
export class LoanAddorUpdateComponent {
  loanForm!: FormGroup;
  loandata: any
  id: number
  constructor(private fb: FormBuilder, private loan: LoanDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['loannumber']);
    console.log(this.id)
    // if (this.id)
      this.getLoanbyLoanNumber(this.id)
    // else
      this.createForm()

  }
  createForm(data?: any) {

    this.loanForm = this.fb.group({
      id: [data?data.empID:'', Validators.required],
      loanNumber: [data?data.loanNumber:'', Validators.required],
      loanAmount: [data?data.loanAmount:'', Validators.required],
      loanDate: [data?data.loandata:'', Validators.required],
      interestRate: [data?data.interestRate:'', Validators.required],
      tenureMonths: [data?data.tenureMonths:'', Validators.required],
      roi:[data?data.roi:'',Validators.required],
      status: [false]
    });

  }
  onSubmit(): void {
    const loandeatils = this.loanForm.value
    console.log(loandeatils)
    if (loandeatils != null) {
      // loandeatils.id = this.id
      loandeatils.loanDate=Date
      loandeatils.interestRate=0
      
      if(loandeatils.loanNumber==0)
      {loandeatils.loanNumber=null;}
      
      this.Add(loandeatils)
    } else {
      console.log('Form is invalid');
    }
  }

  Add(model: any) {
    this.loan.Add(model).subscribe((res: any) => {
      this.loandata = res;
    })
  }

  getLoanbyLoanNumber(loannumber: number) {
    this.loan.getDeatilsById(loannumber).subscribe((res: any) => {
    console.log(res.data)
      this.createForm(res.data)
    })
  }

}

