import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees : Employee[];
  api : string;

  /* ngOnInit() {
  } */
  
  getAll(): Observable<Employee[]> {
    //return this.http.get<any[]>(`${this.api}/employees`);
    return this.http.get<any[]>('localhost:3000/employees');
    }

  public getEmployees() : Employee[] {
    this.http.get<Employee[]>('localhost:3000/employees').subscribe(data => {this.employees = data});
    return this.employees;
    /* return [
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
      
    ] */
  }

  public getSingle(mnr:number) {
    return this.getEmployees().find(e => e.mnr === mnr);
  }
  
  constructor(private http: HttpClient) {
    this.api = 'localhost:3000'
   }
}
