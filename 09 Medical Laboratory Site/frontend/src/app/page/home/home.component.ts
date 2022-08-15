import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { StatisticService } from 'src/app/service/statistic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = this.config.homeHeader.title;
  text: string = this.config.homeHeader.text;
  sidebarMenuItems: IMenuItem[] = this.config.sidebarMenu;

  patientCount$: Observable<any> = this.statisticService.getCount('patient-count');
  physicianCount$: Observable<any> = this.statisticService.getCount('physician-count');
  testCount$: Observable<any> = this.statisticService.getCount('test-count');
  sampleCount$: Observable<any> = this.statisticService.getCount('sample-count');
  cityCount$: Observable<any> = this.statisticService.getCount('city-count');

  constructor(
    private statisticService: StatisticService,
    private config: ConfigService
  ) {}

  ngOnInit(): void { }
}
