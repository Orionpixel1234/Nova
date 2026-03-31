import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NestHome {
  getHome() {
    return 'home works!';
  }
}
