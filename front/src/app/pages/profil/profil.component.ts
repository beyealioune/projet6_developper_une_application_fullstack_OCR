import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Author } from 'src/app/models/author';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/services/article.service';
import { SessionService } from 'src/app/services/session.service';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  profileForm!: FormGroup;
  user!: User;
  articles!:Article[];

  constructor(private fb: FormBuilder, private userService: UserService, private articleService: ArticleService,private subscriptionService : SubscribeService, private sessionService: SessionService,private router: Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    // Charger les informations de l'utilisateur et les remplir dans le formulaire
    this.userService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      console.log('User!!!!!!!!!:', this.user);
      
        this.subscriptionService.getSubscribedArticles(user.id).subscribe(
          (data: Article[]) => {
            this.articles = data;
            console.log('Articles:', this.articles);
          },
          (error) => {
            console.error('Error fetching articles:', error);
          }
        );
      
        
      });
      
      this.profileForm.patchValue({
        username: this.user.name,
        email: this.user.email
      });


   
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: Author = {
        ...this.user,
        username: this.profileForm.value.username,
        email: this.profileForm.value.email
      };

      this.userService.updateUserProfile(updatedUser).subscribe(
        user => {
          console.log('User profile updated successfully', user);
        },
        error => {
          console.error('Failed to update user profile', error);
        }
      );
    }
  }

  unsubscribe(articleId: number): void {
    this.subscriptionService.unsubscribeFromArticle(this.user.id, articleId).subscribe(
      () => {
        this.articles = this.articles.filter(article => article.id !== articleId);
        console.log('Unsubscribed from article with ID:', articleId);
      },
      (error) => {
        console.error('Error unsubscribing from article:', error);
      }
    );
  }

  logOut(): void {
    this.sessionService.logOut();
    this.router.navigate(['/connexion']);
  }

}