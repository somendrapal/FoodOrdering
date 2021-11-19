import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsAuthenticateComponent } from './vendors-authenticate.component';

describe('VendorsAuthenticateComponent', () => {
  let component: VendorsAuthenticateComponent;
  let fixture: ComponentFixture<VendorsAuthenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsAuthenticateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
