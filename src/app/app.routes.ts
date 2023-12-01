import { Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { SeviceService } from './sevice.service';

export const routes: Routes = [
    {
        component:AddEmpComponent,
        path:''
    },
    
    {
        component:EmpDetailsComponent,
        path:'details'
    },
];
