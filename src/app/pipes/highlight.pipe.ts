import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  pure: false
})

export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }


  transform(value: any, args: any): any {
    if (!args) {return value;}
    for(const sentence of args) {
      const reText: RegExp = new RegExp(sentence.text, 'gi');
      value = value.replace(reText, `<span style="background: ${this.getBackground(sentence.confidence)}; cursor: pointer"
        title="${sentence.confidence}">${sentence.text}</span>`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  private getBackground(confidence: number): string {
    if (confidence <= 0.33) {
      return 'red';
    }
    if (confidence > 0.33 && confidence <= 0.66) {
      return 'yellow';
    }
    if (confidence > 0.66) {
      return 'green';
    }
    return 'transparent';
  }
}
