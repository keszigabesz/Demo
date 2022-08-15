import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physician } from '../model/physician';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PhysicianService extends BaseService<Physician> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'physician';
  }
}
