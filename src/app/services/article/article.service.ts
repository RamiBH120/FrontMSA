import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:9090/Article';  // Adjust the URL based on your API endpoint

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article);
  }

  updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.url}/${id}`, article);
  }

  deleteArticle(id: number): Observable<string> {
    return this.http.delete<string>(`${this.url}/${id}`);
  }
}
