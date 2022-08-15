import { Product } from './../../model/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
