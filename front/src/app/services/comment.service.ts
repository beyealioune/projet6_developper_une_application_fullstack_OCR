import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private pathService = environment.baseUrl ;


  constructor(private http: HttpClient) { }
  getCommentsByArticleId(articleId: String): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.pathService}/article/${articleId}`);
  }

  addComment(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(`${this.pathService}/add`, comment);
  }
}
