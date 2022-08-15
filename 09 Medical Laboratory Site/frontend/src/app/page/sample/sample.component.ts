import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from 'src/app/model/sample';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  columns = this.config.sampleTableColumns;
  list$: Observable<Sample[]> = this.sampleService.getAll();
  editor: string = '/sample-edit/';
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private config: ConfigService,
    private sampleService: SampleService
  ) {}

  ngOnInit(): void {}

  onDeleteOne(sample: Sample): void {
    this.sampleService
      .delete(sample._id)
      .subscribe(() => (this.list$ = this.sampleService.getAll()));
  }
}
