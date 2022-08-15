import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  editedObject: Category | undefined = undefined;
  edit: boolean = true;
  mainComponentRoute = "categories";

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: CategoryService,
    private toastr: ToastrService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Category();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Category) {
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
