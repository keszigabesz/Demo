import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductListComponent } from './common/product-list/product-list.component';

import { FilterPipe } from './pipe/filter.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { RandomPipe } from './pipe/random.pipe';
import { FirstFewPipe } from './pipe/first-few.pipe';
import { ProductBlockComponent } from './common/product-block/product-block.component';
import { CategoryComponent } from './page/category/category.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { DataBlockComponent } from './common/data-block/data-block.component';
import { ButtonBlockComponent } from './common/button-block/button-block.component';
import { ProductCardPreviewComponent } from './common/product-card-preview/product-card-preview.component';
import { AddProductComponent } from './common/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductListComponent,
    ProductCardComponent,
    FilterPipe,
    FeaturedPipe,
    RandomPipe,
    FirstFewPipe,
    ProductBlockComponent,
    CategoryComponent,
    SorterPipe,
    AdminComponent,
    DataEditorComponent,
    DataBlockComponent,
    ButtonBlockComponent,
    ProductCardPreviewComponent,
    AddProductComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
