import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private billService: BillService,
    private orderService: OrderService
  ) {}

  orderChartData:string = '';
  billChartData:string = '';

  activeProducts$:  Observable<number> = this.productService.getNumberOfValue('active', true);
  activeCustomers$:  Observable<number> = this.customerService.getNumberOfValue('active', true);
  activeCustomersPercentage$: Observable<number> = this.customerService.getPercentageOfValue('active', true);
  activeProductsPercentage$: Observable<number> = this.productService.getPercentageOfValue('active', true);
  notPaidOrdersPercentage$: Observable<number> = this.orderService.getPercentageOfValue('status', 'new');
  notPaidBillsPercentage$: Observable<number> = this.billService.getPercentageOfValue('status', 'new');

  notPaidOrders$:  Observable<number> = this.orderService.getNumberOfValue('status', 'new');
  sumNotPaidBills$: Observable<number> = this.billService.getSumOfProperty('status', 'new','amount');

  orderPieObserver = {
    next:(x:number) => {
      this.orderChartData = (x * 3.1415 * 24).toString() + ' ' +((1 - x) * 3.1415 * 24).toString();
    },
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  }

  billPieObserver = {
    next:(x:number) => {
      this.billChartData = (x * 3.1415 * 24).toString() + ' ' +((1 - x) * 3.1415 * 24).toString();
    },
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  }

  ngOnInit(): void {
    this.notPaidOrdersPercentage$.subscribe(this.orderPieObserver);
    this.notPaidBillsPercentage$.subscribe(this.billPieObserver);
  }


}
