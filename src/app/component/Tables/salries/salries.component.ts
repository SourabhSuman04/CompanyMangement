import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../../../services/salaries.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-salries',
  imports: [CommonModule,RouterModule],
  templateUrl: './salries.component.html',
  styleUrl: './salries.component.css'
})
export class SalriesComponent implements OnInit {

salarydata:any;
constructor(private salary:SalariesService,private loader:LoaderService)
{
}

ngOnInit(): void
{
   this.getSalariesDetails()
}

getSalariesDetails()
{
  this.loader.startLoader();
  this.salary.getSalariesDetails().subscribe((res:any)=>{
this.loader.stopLoader();
this.salarydata=res.data;
  })
  
}

deletesalary(id:number)
{
  this.salary.DeleteSalary(id).subscribe((res:any)=>{
    this.salarydata=res;
  })
}


}
