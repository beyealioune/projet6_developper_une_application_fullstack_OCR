import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Theme } from 'src/app/models/themes';
import { User } from 'src/app/models/user';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themes: Article[] = [];
  userId!: number;

  constructor(private themeService: ThemeService,private subscriptionService: SubscribeService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.userId = user.id;
      },
      (error) => {
        console.error('Error fetching authenticated user:', error);
      }
    );
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


  subscribe(articleId: number): void {
    this.subscriptionService.subscribeToArticle(this.userId, articleId).subscribe(
      response => {
        console.log('Abonné à l\'article avec ID:', articleId);
        // Mettez à jour l'interface utilisateur en conséquence
      },
      error => {
        console.error('Erreur lors de l\'abonnement:', error);
      }
    );
  }
  

}
