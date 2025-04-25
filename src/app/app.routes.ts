import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './component/home/home.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { FooterComponent } from './footer/footer.component';
import { LoanDeatilsComponent } from './component/loan-deatils/loan-deatils.component';

export const routes: Routes = [
    {
        path: "",
        component: UserLoginComponent
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "employee",
        component: FooterComponent
    },
    {
        path: "Add",
        component: AddEmployeeComponent
    },
    {
        path: 'edit/:id',
        component: UpdateEmployeeComponent
    },
    {
        path:'loan',
        component:LoanDeatilsComponent
    }
];
