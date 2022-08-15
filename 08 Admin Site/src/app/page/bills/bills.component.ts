import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BillService} from "../../service/bill.service";
import {Observable} from "rxjs";
import {Bill} from "../../model/bill";
import {TableColumn} from "../../model/table-column";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Bill[]> = this.billService.getAll();
  public phrase: string = '';
  searchKey: string = '';
  searchValue: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'orderID', message: 'ORDERID'},
    {reference: 'amount', message: 'AMOUNT'},
    {reference: 'status', message: 'STATUS'},
  ];

  constructor(
    private router: Router,
    private billService: BillService
  ) {
  }

  ngOnInit(): void {
  }

  onChangeOrder(reference: string) {
    if (reference == this.sort) {
      this.descendingOrder = !this.descendingOrder;
    } else {
      this.sort = reference;
      this.descendingOrder = false;
    }
  }

  edit(id: number): void {
    this.router.navigate(["edit-bill", id]);
  }

  delete(item: { id: number }) {
    this.billService.delete(item.id).subscribe(() => {
        this.list$ = this.billService.getAll()
      }
    );
  }
}
