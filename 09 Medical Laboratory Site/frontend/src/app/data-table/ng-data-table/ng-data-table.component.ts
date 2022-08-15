import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface INgTableColumn {
  title: string;
  key: string;
}
@Component({
  selector: 'ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss'],
})
export class NgDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  // data
  @Input() list: T[] = [];
  @Input() columns: any[] = [];
  @Input() editor: string = '';

  @Output() editItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<any>();

  // filter
  phrase: string = '';
  filterKey: string = '';

  //sorting
  sort: string = '';
  descendingOrder: boolean = false;

  // paging
  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;
  get pageList(): number[] {
    const pageSize = Math.ceil(this.list.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  // paging
  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }

  //sorting
  onChangeOrder(reference: string) {
    if (reference == this.sort) {
      this.descendingOrder = !this.descendingOrder;
    } else {
      this.sort = reference;
      this.descendingOrder = false;
    }
  }

  // actions

  onEdit(_id: string): void {
    this.editItem.emit(_id);
  }
  onDelete(item: any): void {
    if (confirm('Biztos, hogy törölni akar?')) {
      this.toastr.error('Sikeres törlés.', '', {
        timeOut: 1800,
        positionClass: 'toast-top-right'
      });
      this.deleteItem.emit(item);
    }
  }
}
