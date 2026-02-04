import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerResponse } from '../types/registerResponse';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl: string = 'http://localhost:8080/auth/register';

  constructor(private httpClient: HttpClient) {}

  register(name: string, email: string, password: string) {
    return this.httpClient.post<registerResponse>(this.apiUrl, { name, email, password });
  }
}
