import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'customer';
  }

  createRealCustomer(customer: Customer): Customer {
    if (typeof customer?.address === 'string') {
      const addressParts = (customer.address as unknown as string).split(' ');
      const zip = addressParts.shift();
      const street = addressParts.join(' ');
      customer.address = new Address();
      customer.address.zip = parseInt(zip || '');
      customer.address.street = street;
    }
    return new Customer(customer);
  }

  override getAll(): Observable<Customer[]> {
    return super.getAll().pipe(
      map(list => {
        return list.map(c => this.createRealCustomer(c));
      }),
    );
  }

  override get(id: number): Observable<Customer> {
    return super.get(id).pipe(
      map(customer => this.createRealCustomer(customer) )
    );
  }
}
