import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-edit',
  templateUrl: './loading-edit.component.html',
  styleUrls: ['./loading-edit.component.scss']
})
export class LoadingEditComponent implements OnInit {

  @Input() editedObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
