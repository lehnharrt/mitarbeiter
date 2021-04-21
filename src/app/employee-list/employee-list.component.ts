import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../shared/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  @Output() showDetailsEvent = new EventEmitter<Employee>();

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  showDetails(e : Employee): void {
    this.showDetailsEvent.emit(e);
  }
}
