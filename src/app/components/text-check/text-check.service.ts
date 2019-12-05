import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TextCheckService {
  constructor() {
  }

  submit(form: FormGroup): void {
    console.log(form);
  }
}
