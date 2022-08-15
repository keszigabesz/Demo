import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reagent } from '../model/reagent';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ReagentService extends BaseService<Reagent> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'reagent';
  }
}
