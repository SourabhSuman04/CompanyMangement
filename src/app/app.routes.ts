import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';

import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { FooterComponent } from './footer/footer.component';
import { LoanDeatilsComponent } from './component/loan-deatils/loan-deatils.component';
import { ProjectComponent } from './component/Tables/project/project.component';
import { Salaries } from './model/Salaries';
import { SalriesComponent } from './component/Tables/salries/salries.component';
import { EmiinfoComponent } from './component/Tables/emiinfo/emiinfo.component';
import { EmployeeComponent } from './component/Tables/employee/employee.component';
import { MasterLayoutComponent } from './component/master-layout/master-layout.component';
import { authGuard } from './helper/Authguard/auth.guard';
import { ProjectAddorUpdateComponent } from './component/AddOrUpdate/project-addor-update/project-addor-update.component';
import { SalariesAddorUpdateComponent } from './component/AddOrUpdate/salaries-addor-update/salaries-addor-update.component';
import { LoanAddorUpdateComponent } from './component/AddOrUpdate/loan-addor-update/loan-addor-update.component';

export const routes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "Master"

    },
    {
        path: 'Master',
        component: MasterLayoutComponent,
        canActivate: [authGuard],
        children: [

            {
                path: "employee",
                component: EmployeeComponent
            },

            {
                path: "add",
                component: AddEmployeeComponent
            },
            {
                path: 'edit/:id',
                component: UpdateEmployeeComponent
            },
            {
                path:"addproject",
                component:ProjectAddorUpdateComponent
            },
            {
                path:"editproject/:id",
                component:ProjectAddorUpdateComponent
            },
            {
                path:"addsalary",
                component:SalariesAddorUpdateComponent
            },
            {
                path:"editsalary/:id",
                component:SalariesAddorUpdateComponent
            },
            {
                path:"addloan",
                component:LoanAddorUpdateComponent
            },
            {
                path:"editLoan/:loannumber",
                component:LoanAddorUpdateComponent
            },
            
            {
                path: 'loan',
                component: LoanDeatilsComponent
            },
            {
                path: 'project',
                component: ProjectComponent
            },
            {
                path: 'salary',
                component: SalriesComponent
            },
            {
                path: 'emi',
                component: EmiinfoComponent
            }

        ]

    },
    {
        path: "login",
        component: UserLoginComponent
    },
    // {
    //     path: "home", component: HomeComponent
    // },

];
