import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.scss']
})
export class CheckResultComponent {

  @Input('result') result;

  @Input('text') text;

}
