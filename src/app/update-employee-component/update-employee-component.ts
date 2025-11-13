import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-component',
  standalone: false,
  templateUrl: './update-employee-component.html',
  styleUrl: './update-employee-component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  empId: number = 0;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.empId).subscribe(
      data =>{
        this.employee = data;
      }
    )
  }
  onSubmit() {
    this.employeeService.updateEmployee(this.empId, this.employee).subscribe(
      data=>{
        alert('✅ Employee updated successfully!');
        this.employee = data;
        this.goToEmployeeList();
      }
    )
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
