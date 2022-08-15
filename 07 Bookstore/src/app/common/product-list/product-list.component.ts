import { Product } from './../../model/product';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

@Input() products: Product[] = [];
  filterKey: string = 'title';
  public phrase: string = '';
  sort: string = 'id';
  descendingOrder: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onOrderDirectionChange(){
    this.descendingOrder = !this.descendingOrder
  }

}
