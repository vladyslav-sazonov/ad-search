import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { AdProbabilityComponent } from './components/ad-probability/ad-probability.component';
import { CheckResultComponent } from './components/check-result/check-result.component';
import { TextCheckFormService } from './components/text-check/text-check-form.service';
import { TextCheckComponent } from './components/text-check/text-check.component';
import { TextCheckService } from './components/text-check/text-check.service';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextCheckComponent,
    CheckResultComponent,
    AdProbabilityComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    TextCheckFormService,
    TextCheckService
  ],
  entryComponents: [
    AdProbabilityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
