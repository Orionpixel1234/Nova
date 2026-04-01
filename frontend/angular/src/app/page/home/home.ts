import { Component } from '@angular/core';
import { NestHome } from '../../web/service/nest-home';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [NestHome],
})
export class Home {
  home$!: ReturnType<NestHome['getHome']>;

  constructor(public nestHome: NestHome) {}

  ngOnInit() {
    this.home$ = this.nestHome.getHome();
  }
}
