import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { TestService } from 'src/app/service/test.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.scss'],
})
export class TestEditComponent implements OnInit {
  test$: Observable<Test> = new Observable();
  test: Test = new Test();
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private testService: TestService,
    private config: ConfigService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    const id = this.ar.snapshot.paramMap.get('id');
    if (id !== '000000000000000000000000') {
      this.ar.params.subscribe({
        next: param => (this.test$ = this.testService.get(id)).subscribe({
          next: test => this.test = test,
          error: error => console.log(error),
        })
      });
    }
  }

  onSend(test: Test) {
    const crudObservable: Observable<any> =
      test._id
        ? this.testService.update(test)
        : this.testService.create(test);
    crudObservable.subscribe((result) => {
      this.toastr.success('Sikeres mentés.', '');
      this.router.navigate(['/', 'test']);
    });
  }
}
