import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee-component/employee-component';
import { CreateEmployeeComponent } from './create-employee-component/create-employee-component';

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'create-employee', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
