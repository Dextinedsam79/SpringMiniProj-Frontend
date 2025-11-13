import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${empId}`, employee);
  }
}
