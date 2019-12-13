import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TextCheckData } from './text-check.data';

@Injectable()
export class TextCheckService {

  constructor(private http: HttpClient) {
  }

  submit(form: FormGroup): Observable<any> {
    return this.http.post('http://0.0.0.0:3333/find_adverts', {});
  }
}
