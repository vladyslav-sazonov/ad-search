import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextCheckFormService } from './text-check-form.service';

@Component({
  selector: 'app-text-check',
  templateUrl: './text-check.component.html',
  styleUrls: ['./text-check.component.scss']
})
export class TextCheckComponent implements OnInit {
  get textForm(): FormGroup {
    return this.textCheckForm.textCheckForm;
  }

  constructor(private textCheckForm: TextCheckFormService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.textCheckForm.submit();
  }

}
