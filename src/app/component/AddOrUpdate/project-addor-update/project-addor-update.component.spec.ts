import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddorUpdateComponent } from './project-addor-update.component';

describe('ProjectAddorUpdateComponent', () => {
  let component: ProjectAddorUpdateComponent;
  let fixture: ComponentFixture<ProjectAddorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAddorUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
