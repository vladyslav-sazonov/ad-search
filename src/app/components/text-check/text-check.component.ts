import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, tap } from 'rxjs/operators';
import { AdProbabilityComponent } from '../ad-probability/ad-probability.component';
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

  constructor(private textCheckForm: TextCheckFormService,
              private spinner: NgxSpinnerService,
              public dialog: MatDialog) { }

  public result: TextCheckData;

  private open;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.textCheckForm.submit().pipe(
      tap(next => {this.spinner.show(); return next;}),
      delay(2000),
      tap(next => {this.spinner.hide(); return next;}),
      tap(next => this.result = next),
      tap(() => this.openDialog())
    ).subscribe();
  }

  clear(): void {
    this.result = undefined;
    this.textForm.reset();
  }

  openDialog(): void {
    this.dialog.open(AdProbabilityComponent, {
      width: '250px',
      data: {probability: 80}
    });
  }

}
