import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardPreviewComponent } from './product-card-preview.component';

describe('ProductCardPreviewComponent', () => {
  let component: ProductCardPreviewComponent;
  let fixture: ComponentFixture<ProductCardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
