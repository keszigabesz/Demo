import { ProductService } from './../../service/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss'],
})
export class ButtonBlockComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() updated = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor(private productService: ProductService) {}

  onSave(product: Product) {
    this.productService.updateOne(this.product).subscribe((next) => {
      this.updated.emit(product.id)
    });
  }

  onDelete(product: Product) {
    this.productService.deleteOne(this.product).subscribe((next) => {
      this.deleted.emit(product.id)
    });
  }

  ngOnInit(): void {}
}
