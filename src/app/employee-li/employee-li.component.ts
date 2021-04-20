import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-employee-li',
  templateUrl: './employee-li.component.html',
  styleUrls: ['./employee-li.component.css']
})
export class EmployeeLiComponent implements OnInit {
  @Input() employee: Employee
  @Output() showDetailsEvent = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }


  showDetails(employee: Employee) {
    this.showDetailsEvent.emit(employee);
  }
}
