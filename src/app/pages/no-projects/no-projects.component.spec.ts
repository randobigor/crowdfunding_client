import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProjectsComponent } from './no-projects.component';

describe('NoProjectsComponent', () => {
  let component: NoProjectsComponent;
  let fixture: ComponentFixture<NoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
