import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Address} from "../../model/address";
import {AddressService} from "../../service/address.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  editedObject: Address | undefined = undefined;
  edit: boolean = true;
  mainComponentRoute = "addresses";

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: AddressService,
    private toastr: ToastrService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Address();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Address) {
    const crudObservable: Observable<any> = this.edit ? this.objectService.update(editedObject) : this.objectService.create(editedObject);
    crudObservable.subscribe(
      result => {
        this.toastr.success('Saving successfull', '', {
          timeOut: 1800,
          positionClass: 'toast-top-right'
        });
        this.router.navigate([this.mainComponentRoute])
      }
    )
  }
}
