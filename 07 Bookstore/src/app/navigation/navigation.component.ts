import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from '../service/config.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName: string = this.config.appName;
  menuItems$: Observable<IMenuItem[]> = this.config.getAllMenuItems();

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
