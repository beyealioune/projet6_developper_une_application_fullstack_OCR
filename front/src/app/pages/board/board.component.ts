import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  currentUser!: User;
  articles!: Article[];

  constructor(
    private articleService: ArticleService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
      this.articleService.getArticlesByUser(1).subscribe(data => {
        this.articles = data;
      });
    
    
    console.log(this.articles);
    
  }

 

  // loadAuthenticatedUser(): void {
  //   this.userService.getAuthenticatedUser().subscribe(
  //     (user: User) => {
  //       this.currentUser = user;
  //       const idTest = 1;
  //       this.loadUserArticles(idTest); 
  //     },
  //     (error) => {
  //       console.error('Error fetching authenticated user:', error);
  //     }
  //   );
  // }
}
