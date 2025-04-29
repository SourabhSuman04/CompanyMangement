import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoService } from './footer/demo.service';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, RouterOutlet,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   name = 'kamal';
//   memberdata:any;
//   ttttt = "kgydftghjkiuyhgf"
// model:any
//   aa: string = '';
//   constructor(private emp:DemoService) {
//     this.aa = 'jhgfdfghjm'

// hero.add='jfff'
// hero.id=1
// hero.name='sourabh'
// hero.phone=74108520963
// hero.gender='male'

//     let model = {
//       name: 'adf',
//       add: 'df'
//     }
//   }
 
//   ngOnInit() {
//     // this.getData();
// }

  // getData()
  // {
  //   this.emp.getEmployeeDetails(1).subscribe((res:any)=>{
  //     this.memberdata=res;
  //     console.log(this.memberdata)
  //   })
  // }
    loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }
}


// export class hero
// {
//   id:any;
//   name:string="";
//   add:string="";
//   phone:any;
//   gender:string='';
// }