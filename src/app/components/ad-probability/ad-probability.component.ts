import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdProbabilityData } from './ad-probability.data';

@Component({
  selector: 'app-ad-probability',
  templateUrl: './ad-probability.component.html',
  styleUrls: ['./ad-probability.component.scss']
})
export class AdProbabilityComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdProbabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdProbabilityData) {}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
