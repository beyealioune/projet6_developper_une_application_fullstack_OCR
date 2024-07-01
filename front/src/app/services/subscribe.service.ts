import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private pathService = environment.baseUrl ;

  constructor(private http: HttpClient) { }

  subscribeToArticle(userId: number, articleId: number): Observable<any> {
    return this.http.post<any>(`${this.pathService}subscriptions/article`, null, {
      params: {
        userId: userId.toString(),
        articleId: articleId.toString()
      }
    });
  }

  getSubscribedArticles(userId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.pathService}subscriptions/user/${userId}`);
  }

  unsubscribeFromArticle(userId: number, articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.pathService}subscriptions/article/${articleId}/user/${userId}`);
  }
  
}
