import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  columns = this.config.patientTableColumns;
  list$: Observable<Patient[]> = this.patientService.getAll();
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;
  editor: string = '/patient-edit/';

  constructor(
    private config: ConfigService,
    private patientService: PatientService,
  ) {}

  ngOnInit(): void {}

  onDelete(patient: Patient): void {
    this.patientService
      .delete(patient._id)
      .subscribe(() => (this.list$ = this.patientService.getAll()));
  }
}
