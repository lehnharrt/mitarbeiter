import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() detailsEmployee: Employee;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  detailShowEmployeeList() {
    this.showListEvent.emit();
  }

}
