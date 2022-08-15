import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingEditComponent } from './loading-edit.component';

describe('LoadingEditComponent', () => {
  let component: LoadingEditComponent;
  let fixture: ComponentFixture<LoadingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
