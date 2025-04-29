import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesAddorUpdateComponent } from './salaries-addor-update.component';

describe('SalariesAddorUpdateComponent', () => {
  let component: SalariesAddorUpdateComponent;
  let fixture: ComponentFixture<SalariesAddorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalariesAddorUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalariesAddorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
