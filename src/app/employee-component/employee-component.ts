import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-component',
  standalone: false,
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.getEmployees();}

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data=>{this.employees=data;}
    )
  }
}
