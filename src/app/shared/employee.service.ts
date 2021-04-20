import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public getEmployees() : Employee[] {
    return [
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
  
  constructor() { }
}
