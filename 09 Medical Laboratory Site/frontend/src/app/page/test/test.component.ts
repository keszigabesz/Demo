import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  columns = this.config.testTableColumns;
  list$: Observable<Test[]> = this.testService.getAll();
  editor: string = '/test-edit/';
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private config: ConfigService,
    private testService: TestService
  ) {}

  ngOnInit(): void {}

  onDeleteOne(test: Test): void {
    this.testService
      .delete(test._id)
      .subscribe(() => (this.list$ = this.testService.getAll()));
  }
}
