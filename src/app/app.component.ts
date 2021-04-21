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
  appEmployee: Employee;

  appShowList() {
    this.viewState = 'list';
  }

  appShowDetails(employee: Employee) {
    this.appEmployee = employee;
    this.viewState = 'details';
  }
}
