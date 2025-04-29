import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

//   employee:any
//   res:any
//   constructor(private emp:DemoService,private router:Router)
//   {

//   }

//   ngOnInit() {
//     this.getData();
// }
//   getData()
//   {
//     this.emp.getEmployeeDetails(1).subscribe((res:any)=>{
//       this.employee=res;
//       console.log(this.employee)
//     })
//   }

// delete(id:number)
// {
//   console.log('id',id)
//   alert("confirm")
//  this.emp.delete(id).subscribe((res:any)=>
// {
// this.res=res
// alert("res.message");
// console.log(res)
// }) 
// }

// Add()
// {
// this.router.navigate(['/Add'])
// }

// Edit(id:number)
// {
//   this.router.navigate(['/edit',id])
// }

}
