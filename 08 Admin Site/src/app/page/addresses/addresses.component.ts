import {Component, OnInit} from '@angular/core';
import {AddressService} from "../../service/address.service";
import {Observable} from "rxjs";
import {Address} from "../../model/address";
import {TableColumn} from "../../model/table-column";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Address[]> = this.addressService.getAll();
  public phrase: string = '';
  searchKey: string = '';
  searchValue: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'zip', message: 'ZIP'},
    {reference: 'country', message: 'COUNTRY'},
    {reference: 'city', message: 'CITY'},
    {reference: 'street', message: 'STREET'},
    {reference: 'notes', message: 'NOTES'},
  ];

  constructor(
    private router: Router,
    private addressService: AddressService
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
    this.router.navigate(["edit-address", id]);
  }

  delete(item: { id: number }) {
    this.addressService.delete(item.id).subscribe(() => {
        this.list$ = this.addressService.getAll()
      }
    );
  }
}
