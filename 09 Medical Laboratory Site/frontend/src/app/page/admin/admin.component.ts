import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: string = this.config.adminHeader.title;
  text: string = this.config.adminHeader.text;

    sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
