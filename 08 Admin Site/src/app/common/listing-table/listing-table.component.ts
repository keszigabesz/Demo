import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss']
})
export class ListingTableComponent implements OnInit {

  @Input() list = [];
  @Input() keys = [];

  constructor() { }

  ngOnInit(): void {
  }

}
