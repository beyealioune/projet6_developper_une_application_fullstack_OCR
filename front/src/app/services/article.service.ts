import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articles } from '../models/articles';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathService = environment.baseUrl
  
  
  constructor(private http: HttpClient) { }
  
  createArticle(article: Articles): Observable<Articles> {
    return this.http.post<Articles>(`${this.pathService}article/create`, article);
  }

  getArticlesByUser(userId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.pathService}article/user/${userId}`);
  }

  getArticleById(articleId: String): Observable<Article> {
    return this.http.get<Article>(`${this.pathService}article/${articleId}`);
  }


}
