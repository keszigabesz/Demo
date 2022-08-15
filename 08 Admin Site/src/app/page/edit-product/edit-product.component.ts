import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editedObject: Product | undefined = undefined;
  edit: boolean = true;
  mainComponentRoute = "products";

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: ProductService,
    private toastr: ToastrService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Product();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Product) {
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
