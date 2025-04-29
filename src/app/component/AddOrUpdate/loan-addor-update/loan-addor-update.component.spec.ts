import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAddorUpdateComponent } from './loan-addor-update.component';

describe('LoanAddorUpdateComponent', () => {
  let component: LoanAddorUpdateComponent;
  let fixture: ComponentFixture<LoanAddorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAddorUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAddorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
