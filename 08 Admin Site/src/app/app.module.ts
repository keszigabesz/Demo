import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { ProductsComponent } from './page/products/products.component';
import { DatarestructurePipe } from './pipe/datarestructure.pipe';
import { ListingTableComponent } from './common/listing-table/listing-table.component';
import { OrdersComponent } from './page/orders/orders.component';
import { BillsComponent } from './page/bills/bills.component';
import { AddressesComponent } from './page/addresses/addresses.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { LimitPipe } from './pipe/limit.pipe';
import { FormsModule } from '@angular/forms';
import { FilterAllPipe } from './pipe/filter-all.pipe';
import { EditAddressComponent } from './page/edit-address/edit-address.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { EditCategoryComponent } from './page/edit-category/edit-category.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { LoadingAnimationColorsComponent } from './common/loading-animation-colors/loading-animation-colors.component';
import { LoadingEditComponent } from './common/loading-edit/loading-edit.component';
import { SumPipe } from './pipe/sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FilterPipe,
    SorterPipe,
    ProductsComponent,
    DatarestructurePipe,
    ListingTableComponent,
    OrdersComponent,
    BillsComponent,
    AddressesComponent,
    CategoriesComponent,
    CustomersComponent,
    EditBillComponent,
    LimitPipe,
    FilterAllPipe,
    EditAddressComponent,
    EditOrderComponent,
    EditCategoryComponent,
    EditProductComponent,
    EditCustomerComponent,
    LoadingAnimationColorsComponent,
    LoadingEditComponent,
    SumPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
