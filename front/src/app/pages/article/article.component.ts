import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Comment {
  username: string;
  text: string;
}

interface Articles {
  id: number;
  title: string;
  author: string;
  date: string;
  theme: string;
  content: string;
  comments: Comment[];
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }
  selectedArticle: Articles | undefined;
  commentForm!: FormGroup; // Formulaire réactif pour le commentaire

  // Exemple d'un article
  articles: Articles[] = [
    {
      id: 1,
      title: 'Titre de l\'article',
      author: 'Auteur de l\'article',
      date: '2024-06-22',
      theme: 'Thème de l\'article',
      content: 'Contenu de l\'article...',
      comments: [
        { username: 'Utilisateur1', text: 'Premier commentaire' },
        { username: 'Utilisateur2', text: 'Deuxième commentaire' }
      ]
    }
  ];

  // Méthode pour sélectionner un article et afficher ses détails
  selectArticle(article: Articles) {
    this.selectedArticle = article;
  }

  // Méthode pour ajouter un commentaire
  ajouterCommentaire() {
    if (this.commentForm.valid) {
      const newComment: Comment = {
        username: this.commentForm.value.username,
        text: this.commentForm.value.text
      };

      if (this.selectedArticle) {
        this.selectedArticle.comments.push(newComment);
        this.commentForm.reset(); // Réinitialisation du formulaire après l'ajout du commentaire
      }
    }
  }
}
