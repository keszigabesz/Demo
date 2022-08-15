import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample } from '../model/sample';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SampleService extends BaseService<Sample> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'sample';
  }
}
