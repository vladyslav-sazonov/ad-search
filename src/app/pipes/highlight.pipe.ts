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
      // value = value.replace(reText, '<mark>' + sentence.text + '</mark>');
      // // for your custom css
      value = value.replace(reText, `<span class="highlight" style="background: yellow"
        data-conf="${sentence.confidence}">${sentence.text}</span>`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
