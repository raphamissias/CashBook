import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurposeGetResponse, PurposePostResponse } from '../types/purposesResponse.type';

@Injectable({
  providedIn: 'root',
})
export class PurposeService {
  apiUrl: string = 'http://localhost:8080/purposes';

  constructor(private httpClient: HttpClient) {}

  post(name: string, isActive: boolean) {
    return this.httpClient.post<PurposePostResponse>(
      this.apiUrl,
      { name, isActive },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
        }),
      },
    );
  }

  get() {
    return this.httpClient.get<PurposeGetResponse[]>(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
      },
    });
  }
}
