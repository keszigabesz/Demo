import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './page/addresses/addresses.component';
import { BillsComponent } from './page/bills/bills.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { HomeComponent } from './page/home/home.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductsComponent } from './page/products/products.component';
import {EditAddressComponent} from "./page/edit-address/edit-address.component";
import {EditOrderComponent} from "./page/edit-order/edit-order.component";
import {EditCategoryComponent} from "./page/edit-category/edit-category.component";
import {EditProductComponent} from "./page/edit-product/edit-product.component";
import {EditCustomerComponent} from "./page/edit-customer/edit-customer.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: "edit-product/:id",
    component: EditProductComponent
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: "edit-customer/:id",
    component: EditCustomerComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: "edit-order/:id",
    component: EditOrderComponent
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: "edit-bill/:id",
    component: EditBillComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: "edit-category/:id",
    component: EditCategoryComponent
  },
  {
    path: 'addresses',
    component: AddressesComponent,
  },
  {
    path: "edit-address/:id",
    component: EditAddressComponent
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
