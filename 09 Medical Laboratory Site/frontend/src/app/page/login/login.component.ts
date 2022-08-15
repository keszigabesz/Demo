import { Component, OnInit } from '@angular/core';
import { AuthService, ILoginData } from 'src/app/service/auth.service';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  sidebarMenuItems: IMenuItem[] = this.config.sidebarMenu;

  loginData: ILoginData = {};

  constructor(private config: ConfigService, private auth: AuthService,) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.auth.login(this.loginData);
  }
}
