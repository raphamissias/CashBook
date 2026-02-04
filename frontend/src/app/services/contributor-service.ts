import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContributorGetResponse, ContributorPostResponse } from '../types/contributorResponse';

@Injectable({
  providedIn: 'root',
})
export class ContributorService {
  apiUrl: string = 'http://localhost:8080/contributors';

  constructor(private httpClient: HttpClient) {}

  post(name: string, phoneNumber: string, isActive: boolean) {
    return this.httpClient.post<ContributorPostResponse>(
      this.apiUrl,
      { name, phoneNumber, isActive },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
        }),
      },
    );
  }

  get() {
    return this.httpClient.get<ContributorGetResponse[]>(this.apiUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
      }),
    });
  }
}
