import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

export interface IAuthModel {
  success: boolean;
  accessToken: string;
  user: User;
}

export interface ILoginData {
  userName?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;

  loginUrl: string = '';

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginUrl = `${this.apiUrl}login`;

    const loginInfo = sessionStorage.getItem('login');
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.access_token$.next(loginObject.accessToken);
      this.user$.next(loginObject.user);
    }

    this.user$.subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['/', 'admin']);
        } else {
          this.router.navigate(['/']);
          this.access_token$.next('');
          sessionStorage.removeItem('login');
        }
      },
    });
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.toastr.success('Sikeres bejelentkezés.', ''),
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));

      },
      error: (err) =>
        this.toastr.error('Sikertelen bejelentkezés, próbálja meg újra!', ''),
    });
  }

  logout(): void {
    this.toastr.warning('Sikeres kijelentkezés.', ''),
    this.user$.next(null);
    sessionStorage.removeItem('login');
  }
}
