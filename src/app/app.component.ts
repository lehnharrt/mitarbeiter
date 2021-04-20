import { Component } from '@angular/core';
import { Employee } from './shared/employee';

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mitarbeiter';
  viewState: ViewState = 'list';
  employee: Employee;

  showList() {
    this.viewState = 'list';
  }

  showDetails(employee: Employee) {
    this.employee = employee;
    this.viewState = 'details';
  }
}
