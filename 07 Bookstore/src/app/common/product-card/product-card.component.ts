import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() textLength: number = 300;
  @Input() featured: boolean = false;

  buttonText: string = 'Megnéz';
  imageWithPath:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
