import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathService = environment.baseUrl
  
  
  constructor(private http: HttpClient) { }
  
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.pathService}article/create`, article);
  }
}
