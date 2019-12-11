import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, tap } from 'rxjs/operators';
import { TextCheckFormService } from './text-check-form.service';
import { TextCheckData } from './text-check.data';

@Component({
  selector: 'app-text-check',
  templateUrl: './text-check.component.html',
  styleUrls: ['./text-check.component.scss']
})
export class TextCheckComponent implements OnInit {
  get textForm(): FormGroup {
    return this.textCheckForm.textCheckForm;
  }

  public result: TextCheckData;

  constructor(private textCheckForm: TextCheckFormService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.textCheckForm.submit().pipe(
      tap(next => {this.spinner.show(); return next;}),
      delay(2000),
      tap(next => {this.spinner.hide(); return next;}),
      tap(next => this.result = next)
    ).subscribe();
  }

}
