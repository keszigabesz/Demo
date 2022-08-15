import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { Physician } from 'src/app/model/physician';
import { Sample } from 'src/app/model/sample';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';
import { PhysicianService } from 'src/app/service/physician.service';
import { SampleService } from 'src/app/service/sample.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sample-edit',
  templateUrl: './sample-edit.component.html',
  styleUrls: ['./sample-edit.component.scss'],
})
export class SampleEditComponent implements OnInit {
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;
  sample$: Observable<Sample> = new Observable();
  sample: Sample = new Sample();
  sampleTypes: any[] = this.configService.sampleTypes;
  patientNames: Observable<any> = this.patientService.getNames('patient-name');
  physicianNames: Observable<any> = this.physicianService.getNames('physician-name');
  patientSearch: string = '';
  physicianSearch: string = '';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private sampleService: SampleService,
    private configService: ConfigService,
    private patientService: PatientService,
    private physicianService: PhysicianService,
    private config: ConfigService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    const id = this.ar.snapshot.paramMap.get('id');
    if (id !== '000000000000000000000000') {
      this.ar.params.subscribe({
        next: param => (this.sample$ = this.sampleService.get(id)).subscribe({
          next: sample => {
            this.sample = sample
            this.patientSearch = sample.patient_name
            this.physicianSearch = sample.physician_name
          },
          error: error => console.log(error),
        })
      });
    }
  }

  onSend(sample: Sample) {
    sample.patient_name=this.patientSearch;
    sample.physician_name=this.physicianSearch;
    const crudObservable: Observable<any> =
      sample._id
        ? this.sampleService.update(sample)
        : this.sampleService.create(sample);
    crudObservable.subscribe((result) => {
      this.toastr.success('Sikeres mentés.', '');
      this.router.navigate(['/', 'sample']);
    });
  }


  patientSelect(result: any) {
    this.patientSearch = result;
  }
  physicianSelect(result: any) {
    this.physicianSearch = result;
  }



}
