import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card-preview',
  templateUrl: './product-card-preview.component.html',
  styleUrls: ['./product-card-preview.component.scss']
})
export class ProductCardPreviewComponent implements OnInit {

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap( params => this.productService.getOne(params['id']) ),
  );

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
