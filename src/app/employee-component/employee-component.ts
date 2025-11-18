import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-component',
  standalone: false,
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private router: Router) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
  updateEmployee(empId: number) {
      console.log('Navigating to update employee with id:', empId);
    this.router.navigate(['update-employee', empId]);
  }

  deleteEmployee(empId: number) {
    this.employeeService.deleteEmployee(empId).subscribe(
      data => {
        console.log('Employee deleted successfully', data);
        this.getEmployees(); // Refresh the employee list after deletion
      }
    )
  }
}
