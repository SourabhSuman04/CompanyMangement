import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDeatilsComponent } from './loan-deatils.component';

describe('LoanDeatilsComponent', () => {
  let component: LoanDeatilsComponent;
  let fixture: ComponentFixture<LoanDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
