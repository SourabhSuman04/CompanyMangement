import { Component } from '@angular/core';
import { LoanDetailsService } from '../../services/loan-details.service';
import { CommonModule } from '@angular/common';
import { LoanInfo } from '../../model/loanmodel';
import { RouterModule } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loan-deatils',
  imports: [CommonModule,RouterModule],
  templateUrl: './loan-deatils.component.html',
  styleUrl: './loan-deatils.component.css'
})
export class LoanDeatilsComponent {

data:any
loandata:any
constructor(private loan:LoanDetailsService,private loader:LoaderService)
{
}

ngOnInit() 
{
this.getDetails();
}

getDetails()
{
  this.loader.startLoader()
  this.loan.getDetails().subscribe((res:any)=>
  {
    this.loader.stopLoader();
    this.loandata=res.data;
    console.log(this.loandata)
  })
}

delete(LoanNumber:number)
{
  this.loan.Delete(LoanNumber).subscribe((res:any)=>
  {
    this.data=res;
  })
}



}
