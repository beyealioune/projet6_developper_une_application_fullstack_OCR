import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Author } from '../models/author';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Articles } from '../models/articles';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  articleForm!: FormGroup; // Déclarez un FormGroup pour le formulaire
  currentUser!: User;


  constructor(private formBuilder: FormBuilder, private articleService: ArticleService,private userService: UserService) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      theme: ['', Validators.required], // Champ thème avec validation requise
      title: ['', Validators.required], // Champ titre avec validation requise
      content: ['', Validators.required] // Champ contenu avec validation requise
    });
    this.loadAuthenticatedUser();
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const articleData: Articles = {
        title: this.articleForm.value.title,
        content: this.articleForm.value.content,
        createdAt: '',
        author: this.currentUser,
        theme: {
            id: this.articleForm.value.theme.id,
            name: this.articleForm.value.theme.name,
            articles: null // Peut-être null si vous ne l'utilisez pas pour la création d'article
        },
        comments: []
    };
      console.log('Article Data:', articleData);

      this.articleService.createArticle(articleData).subscribe(
        response => {
          console.log('Article créé avec succès : ', response);
          this.articleForm.reset();
        },
        error => {
          console.error('Erreur lors de la création de l\'article : ', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide');
    }
    
  }




  loadAuthenticatedUser() {
    this.userService.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.currentUser = user;
        console.log('Current User:', this.currentUser);
      },
      (error) => {
        console.error('Error fetching authenticated user:', error);
      }
    );
  }
}