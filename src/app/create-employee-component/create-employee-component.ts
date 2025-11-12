import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-component',
  standalone: false,
  templateUrl: './create-employee-component.html',
  styleUrl: './create-employee-component.css',
})
export class CreateEmployeeComponent
 {
  employee : Employee=new Employee();
  constructor(private employeeService: EmployeeService, private route: Router) {}

  onSubmit(){
    this.insertEmployee();
  }
  insertEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>{
         alert('✅ Employee added successfully!');
        console.log('Employee added successfully:', data);
        this.goToEmployeeList();
      },
       (err) => {
        alert('❌ Failed to add employee. Please try again.');
        console.error('Error adding employee:', err);
      },
    )
  }

  goToEmployeeList(){
    this.route.navigate(['/employees']);
  }

}
