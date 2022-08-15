import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationColorsComponent } from './loading-animation-colors.component';

describe('LoadingAnimationColorsComponent', () => {
  let component: LoadingAnimationColorsComponent;
  let fixture: ComponentFixture<LoadingAnimationColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingAnimationColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimationColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
