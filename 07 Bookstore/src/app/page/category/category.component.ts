import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Category } from "../../model/category";
import { CategoryService } from "../../service/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products$: Observable<Product[]>;
  currentCategory$: Observable<Category>;
  categoryId: string = '1';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private ar: ActivatedRoute
  ) {
    this.products$ = productService.getAll();
    this.ar.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.currentCategory$ = categoryService.getOne(this.categoryId);
    });
  }

  ngOnInit(): void {}
}
