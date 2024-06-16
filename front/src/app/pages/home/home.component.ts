import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
register() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}
  constructor() {}

  ngOnInit(): void {}

  start() {
    alert('Commencez par lire le README et à vous de jouer !');
  }
}
