import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   name=localStorage.getItem('username')
   
constructor(private route:Router)
{
  
}
navigateTo(page: string) {
  this.route.navigate(['/Master', page]);
}

   logout()
   {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.route.navigate(["/login"]);
   }
}
