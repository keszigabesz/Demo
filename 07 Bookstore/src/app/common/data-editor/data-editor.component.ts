import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  keys = Object.keys(new Product());
  products$: Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService, private router: Router) {}

  onItemDelete(event: Event) {
    this.products$.subscribe((products) => {
      products = products.filter(
        (product) => product.id != Number.parseFloat(event.toString())
      );
      this.products$ = of(products);
    });
  }

  ngOnInit(): void {}
}
