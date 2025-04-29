import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  username: string = ''
  password: string = ''
  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder,private router:Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      Username: [null],
      Password: [null]
    })
  }



  login() {
    let data=this.form.value;

    // let data={
    //   Username:this.username,
    //   Password: this.password
    // }
    this.authService.Signin(data).subscribe((res: any) => {
     console.log(res)
    
     if (res.isSuccess){

        localStorage.setItem('username',res.data.username);
        localStorage.setItem('token',res.data.token)
        alert(res.message);
        this.router.navigate(['Master']);
      }
      else
        alert(res.message);
    })

  }
}
