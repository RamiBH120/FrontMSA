// edit-article.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article = { title: '', text: '' };
  articleForm: FormGroup;
  formErrors: any = {};

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.loadArticle();
  }

  createForm() {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });

    this.articleForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  onValueChanged(data?: any) {
    if (!this.articleForm) {
      return;
    }
    const form = this.articleForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessages = {
    'title': {
      'required': 'Title is required.',
      'minlength': 'Title must be at least 3 characters long.',
      'maxlength': 'Title cannot be more than 100 characters long.'
    },
    'text': {
      'required': 'Text is required.',
      'minlength': 'Text must be at least 10 characters long.',
      'maxlength': 'Text cannot be more than 500 characters long.'
    }
  };

  loadArticle() {
    // Retrieve article ID from the route parameters
    const articleId = +this.route.snapshot.paramMap.get('id');

    // Call the service to get the article details
    this.articleService.getArticle(articleId).subscribe(
      response => {
        this.article = response;
        // Set the initial form values based on the loaded article
        this.articleForm.setValue({
          title: this.article.title,
          text: this.article.text
        });
      },
      error => {
        console.error('Error loading article', error);
        // Handle error, show an error message, etc.
      }
    );
  }

  onSubmit() {
    if (this.articleForm.valid) {
      // Update the article object with the form values
      this.article = { ...this.article, ...this.articleForm.value };

      // Call the service to update the article
      this.articleService.updateArticle(this.article.id, this.article).subscribe(
        response => {
          console.log('Article updated successfully', response);
          // Optionally, you can navigate to a different page or show a success message.
        },
        error => {
          console.error('Error updating article', error);
          // Handle error, show an error message, etc.
        }
      );
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
