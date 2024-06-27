import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  articleForm!: FormGroup; // Déclarez un FormGroup pour le formulaire

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      theme: ['', Validators.required], // Champ thème avec validation requise
      title: ['', Validators.required], // Champ titre avec validation requise
      content: ['', Validators.required] // Champ contenu avec validation requise
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const articleData: Article = {
        title: this.articleForm.value.title,
        date: new Date().toISOString(),
        author: 'Auteur', 
        content: this.articleForm.value.content
      };

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
}