import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-animation-colors',
  templateUrl: './loading-animation-colors.component.html',
  styleUrls: ['./loading-animation-colors.component.scss']
})
export class LoadingAnimationColorsComponent implements OnInit {

  @Input() list$ = new Observable;

  constructor() { }

  ngOnInit(): void {
  }

}
