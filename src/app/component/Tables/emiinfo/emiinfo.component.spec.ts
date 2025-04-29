import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiinfoComponent } from './emiinfo.component';

describe('EmiinfoComponent', () => {
  let component: EmiinfoComponent;
  let fixture: ComponentFixture<EmiinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmiinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
