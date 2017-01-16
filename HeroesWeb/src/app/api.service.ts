import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  apiUrl: string;

  constructor() {
    this.apiUrl = "http://localhost:59663/"
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

}
