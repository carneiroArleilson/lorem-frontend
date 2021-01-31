import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateditprojectComponent } from './createditproject.component';

describe('CreateditprojectComponent', () => {
  let component: CreateditprojectComponent;
  let fixture: ComponentFixture<CreateditprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateditprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateditprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
