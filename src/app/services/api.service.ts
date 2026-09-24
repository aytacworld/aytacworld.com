import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import type { Observable } from 'rxjs';
import type { ContactData } from '../../../types/contact-data.model';

type PutContactResponse = any;

@Service()
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly url = '/api';

  putContact(body: ContactData): Observable<PutContactResponse> {
    return this.http.put<PutContactResponse>(`${this.url}/contact`, body);
  }
}
