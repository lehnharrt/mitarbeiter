import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        mnr: 123,
        name: 'Laschet',
        vorname: 'Armin',
        gehalt: 120000
      },
      {
        mnr: 124,
        name: 'Scholz',
        vorname: 'Olaf',
        gehalt: 123000
      },
      {
        mnr: 125,
        name: 'Baerbock',
        vorname: 'Annalena',
        gehalt: 130000
      }
      
    ]
  }
}
