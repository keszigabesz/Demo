import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService extends BaseService<Patient> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'patient';
  }
}
