import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Theme } from 'src/app/models/themes';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themes: Article[] = [];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes();
  }

 getThemes(): void {
    this.themeService.getAllThemes().subscribe(
      (data) => {
        this.themes = data;
        console.log('Themes:', this.themes);
        
      },
      (error) => {
        console.error('Error fetching themes:', error);
      }
    );
  }
  

}
