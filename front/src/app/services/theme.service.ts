import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private pathService = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllThemes(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.pathService}article/allArticles`);
  }
}
