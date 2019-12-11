import { AfterViewInit, Component, DoCheck, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.scss']
})
export class CheckResultComponent implements DoCheck {

  @Input('result') result;

  @Input('text') text;

  constructor(private elRef: ElementRef) { }

  ngDoCheck(): void {
    const sentences: any = this.elRef.nativeElement.children;
    if (sentences.length > 0) {
      for(const sentence of sentences) {
        console.log(sentence.getAttribute('data-conf'));
      }
    }
  }

}
