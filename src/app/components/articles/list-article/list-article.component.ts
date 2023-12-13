// list-article.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    // Call the service to get the list of articles
    this.articleService.getAllArticles().subscribe(
      response => {
        this.articles = response;
      },
      error => {
        console.error('Error fetching articles', error);
        // Handle error, show an error message, etc.
      }
    );
  }

  navigateToAddForm() {
    this.router.navigate(['/add-article']);
  }

  navigateToEditForm(articleId: number) {
    this.router.navigate(['/edit-article', articleId]);
  }

  deleteArticle(articleId: number) {
    // Call the service to delete the article
    this.articleService.deleteArticle(articleId).subscribe(
      response => {
        console.log('Article deleted successfully', response);
        // Reload the articles after deletion
        this.loadArticles();
      },
      error => {
        console.error('Error deleting article', error);
        // Handle error, show an error message, etc.
      }
    );
  }
}
