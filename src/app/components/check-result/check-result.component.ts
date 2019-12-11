import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.scss']
})
export class CheckResultComponent implements OnInit {

  @Input('result') result;

  constructor() { }

  ngOnInit(): void {
  }

}
