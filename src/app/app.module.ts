import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TextCheckFormService } from './components/text-check/text-check-form.service';
import { TextCheckComponent } from './components/text-check/text-check.component';
import { TextCheckService } from './components/text-check/text-check.service';

@NgModule({
  declarations: [
    AppComponent,
    TextCheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    TextCheckFormService,
    TextCheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
