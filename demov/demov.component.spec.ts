import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemovComponent } from './demov.component';

describe('DemovComponent', () => {
  let component: DemovComponent;
  let fixture: ComponentFixture<DemovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
