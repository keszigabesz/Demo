import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-block',
  templateUrl: './data-block.component.html',
  styleUrls: ['./data-block.component.scss'],
})
export class DataBlockComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() keys: string[] = [];
  @Output() itemDeleted = new EventEmitter();

  isAlertVisible: boolean = false;
  alertMessage: string = '';
  alertDismiss: any;
  editable: boolean = true;
  categories: any[] = [
    {name:'-',id:0},
    {name:'ifjusági', id:1},
    {name:'kortárs',id:2},
    {name:'útikönyv',id:3}
  ];

  constructor() {}

  showAlert(message: string, timeout: number) {
    this.alertMessage = message;
    this.isAlertVisible = true;
    this.alertDismiss = setTimeout(() => {
      this.alertMessage = '';
      this.isAlertVisible = false;
    }, timeout);
  }

  onUpdate(event: Event) {
    this.showAlert(`Termék frissítve`, 3000);
    console.log(event);
  }

  onDelete(event: Event) {
    let timeout = 2000
    this.showAlert(`Termék törölve`, timeout);
    this.editable = false;
    setTimeout(() => {
      this.itemDeleted.emit(event);
    }, timeout);
  }

  ngOnInit(): void {}
}
