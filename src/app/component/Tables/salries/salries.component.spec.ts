import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalriesComponent } from './salries.component';

describe('SalriesComponent', () => {
  let component: SalriesComponent;
  let fixture: ComponentFixture<SalriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
