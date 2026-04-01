import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NestHome {
  host = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get(`${this.host}/home`, {
      responseType: 'text'
    }).pipe(map((res) => res));
  }
}
