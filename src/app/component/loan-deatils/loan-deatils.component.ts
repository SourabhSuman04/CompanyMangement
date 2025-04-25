import { Component } from '@angular/core';
import { LoanDetailsService } from '../../services/loan-details.service';
import { CommonModule } from '@angular/common';
import { LoanInfo } from '../../model/loanmodel';

@Component({
  selector: 'app-loan-deatils',
  imports: [CommonModule],
  templateUrl: './loan-deatils.component.html',
  styleUrl: './loan-deatils.component.css'
})
export class LoanDeatilsComponent {

data:any
loandata:any
constructor(private loan:LoanDetailsService)
{
}

ngOnit()
{
this.getDetails();
}

getDetails()
{
  this.loan.getDetails().subscribe((res:any)=>
  {
    this.loandata=res;
  })
}

delete(id:number)
{
  this.loan.Delete(id).subscribe((res:any)=>
  {
    this.data=res;
  })
}

Add()
{
  result:{}
  this.loan.Add(LoanInfo).subscribe((res:any)=>
  {
this.data=res;
  })
}

}
