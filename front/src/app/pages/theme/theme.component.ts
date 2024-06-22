import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  themes = [
    { id:1,
      theme: 'Article 1',
      title:'Article 1',
      author: 'Auteur 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:2,
      theme: 'Article 1',
      title:'Article 1',
      author: 'Auteur 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    // Ajoutez plus d'articles ici
  ];

}
