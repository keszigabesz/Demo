import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { CategoryService } from "./category.service";

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'DáBaKoFa könyvesbolt';

  defaultMenuItems: IMenuItem[] = [
    {text: 'Kezdőlap', link: '/', icon: 'home'},
  ]

  appendMenuItems: IMenuItem[] = [
    {text: 'Admin', link: '/admin', icon: 'home'},
  ]

  constructor(private categoryService: CategoryService) { }

  getAllMenuItems(): Observable<IMenuItem[]>{
    return this.categoryService.getAll().pipe(
      map(result => {
        const categoryMenuItems: IMenuItem[] = [];
        for (const category of result) {
          categoryMenuItems.push({text: category.name, link: `/kategoria/${category.id}`})
        }
        return this.defaultMenuItems.concat(categoryMenuItems).concat(this.appendMenuItems);
      })
    )
  }
}
