import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  editedObject: Customer | undefined = undefined;
  edit: boolean = true;
  mainComponentRoute = "customers";

  //RFC2822
  REGEXP_EMAIL_VALIDATOR = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: CustomerService,
    private toastr: ToastrService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Customer();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Customer) {
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
