import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  editedObject: Order | undefined = undefined;
  edit: boolean = true;
  listOfStatusValues: string[] = ["new", "shipped", "paid"];
  mainComponentRoute = "orders";

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: OrderService,
    private toastr: ToastrService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Order();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Order) {
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
