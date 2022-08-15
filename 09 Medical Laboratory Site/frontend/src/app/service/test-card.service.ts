import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../model/test';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TestCardService extends BaseService<Test>{

  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'test-card';
  }
}
