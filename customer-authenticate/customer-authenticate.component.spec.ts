import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAuthenticateComponent } from './customer-authenticate.component';

describe('CustomerAuthenticateComponent', () => {
  let component: CustomerAuthenticateComponent;
  let fixture: ComponentFixture<CustomerAuthenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAuthenticateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
