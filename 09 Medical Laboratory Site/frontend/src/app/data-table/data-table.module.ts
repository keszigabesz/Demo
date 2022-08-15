import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDataTableComponent } from './ng-data-table/ng-data-table.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../data-table/pipe/filter.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { SorterPipe } from '../data-table/pipe/sorter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgDataTableComponent, FilterPipe, SorterPipe],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [NgDataTableComponent, FilterPipe],
})
export class DataTableModule {}
