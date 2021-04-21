import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/employee';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() detailsEmployee: Employee;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(private es: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.detailsEmployee = this.es.getSingle(parseInt(params.get('mnr')));
  }

  detailShowEmployeeList() {
    this.showListEvent.emit();
  }

}
