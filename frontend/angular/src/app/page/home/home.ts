import { Component } from '@angular/core';
import { NestHome } from '../../web/service/nest-home';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [NestHome],
})
export class Home {
  constructor(public nestHome: NestHome) {}

  ngOnInit() {
    console.log(this.nestHome.getHome());
  }
}
