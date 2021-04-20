import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLiComponent } from './employee-li.component';

describe('EmployeeLiComponent', () => {
  let component: EmployeeLiComponent;
  let fixture: ComponentFixture<EmployeeLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
