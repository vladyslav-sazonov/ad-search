import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TextCheckData } from './text-check.data';
import { TextCheckService } from './text-check.service';

@Injectable()
export class TextCheckFormService {
  public textCheckForm: FormGroup;

  constructor(private fb: FormBuilder,
              private textCheck: TextCheckService) {
    this.textCheckForm = fb.group({
      text: new FormControl('', [Validators.required, Validators.maxLength(1000)])
    });
  }

  submit(): Observable<TextCheckData> {
    return this.textCheck.submit(this.textCheckForm.value);
  }
}
