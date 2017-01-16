import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {

  apiUrl: string;

  constructor(private http: Http, private apiService: ApiService) { 
    this.apiUrl = this.apiService.getApiUrl();
  }

  public getHeroes = (): Observable<Hero[]> => {
    return this.http.get(`${this.apiUrl}heroes/all`)
      .map((response: Response) => <Hero[]>response.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }

  public getHero(Id: number): Observable<Hero> {
    return this.http.get(`${this.apiUrl}heroes/${Id}`)
      .map((response: Response) => <Hero>response.json());
  }
}