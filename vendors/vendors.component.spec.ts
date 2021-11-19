import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsComponent } from './vendors.component';

describe('VendorShowComponent', () => {
  let component: VendorsComponent;
  let fixture: ComponentFixture<VendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
