import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Comments } from 'src/app/models/comments';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
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

  articleId: string | null = null;
  article: Article | null = null;
  error: string | null = null;
  comments: Comments[] = [];
  currentUser!: User;


  constructor(private fb: FormBuilder,private route: ActivatedRoute,  private articleService: ArticleService,private commentService: CommentService,private userService: UserService) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    if (this.articleId) {
      this.articleService.getArticleById(this.articleId).subscribe(
        (data: Article) => this.article = data,      

        (error: any) => this.error = 'Failed to load article'

        
      );
    }

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
  





  selectedArticle: Articles | undefined;
  commentForm!: FormGroup; // Formulaire réactif pour le commentaire



  // Méthode pour sélectionner un article et afficher ses détails
  selectArticle(article: Articles) {
    this.selectedArticle = article;
  }

  addComment(): void {
    if (this.commentForm.valid && this.articleId) {
      const newComment: Comments = {
        content: this.commentForm.value.content,
        author: this.currentUser,
        article: this.article,
        createdAt: new Date().toISOString()
      };

      this.commentService.addComment(newComment).subscribe(
        (data: Comments) => {
          this.comments.push(data);
          this.commentForm.reset(); // Réinitialisation du formulaire après l'ajout du commentaire
        },
        (error: any) => {
          this.error = 'Failed to add comment';
          console.error('Error:', error);
        }
      );
    }
  }


  loadComments(): void {
    if (this.articleId) {
      this.commentService.getCommentsByArticleId(this.articleId).subscribe(
        (data: Comments[]) => this.comments = data,
        (error: any) => {
          this.error = 'Failed to load comments';
          console.error('Error:', error);
        }
      );
    }
  }
}
