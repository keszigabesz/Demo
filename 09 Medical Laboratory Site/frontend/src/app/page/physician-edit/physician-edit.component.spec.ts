import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianEditComponent } from './physician-edit.component';

describe('PhysicianEditComponent', () => {
  let component: PhysicianEditComponent;
  let fixture: ComponentFixture<PhysicianEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
