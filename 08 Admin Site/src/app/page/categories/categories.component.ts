import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {TableColumn} from "../../model/table-column";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  sort: string = 'id';
  descendingOrder: boolean = false;
  list$: Observable<Category[]> = this.categoriesService.getAll();
  public phrase: string = '';
  searchKey: string = '';
  searchValue: string = '';

  columns: TableColumn[] = [
    {reference: 'id', message: 'ID'},
    {reference: 'name', message: 'NAME'},
    {reference: 'description', message: 'DESCRIPTION'},
  ];


  constructor(
    private router: Router,
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  onChangeOrder(reference: string) {
    if (reference == this.sort) {
      this.descendingOrder =! this.descendingOrder;
    } else {
      this.sort = reference;
      this.descendingOrder = false;
    }
  }

  edit(id: number): void {
    this.router.navigate(["edit-category", id]);
  }

  delete(item: { id: number }) {
    this.categoriesService.delete(item.id).subscribe(() => {
        this.list$ = this.categoriesService.getAll()
      }
    );
  }
}
