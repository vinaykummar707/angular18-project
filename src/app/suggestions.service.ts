import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsersByPage(page: number) {
    return this.http.get<UsersResponse>(`${this.baseUrl}?page=${page}`);
  }
}
