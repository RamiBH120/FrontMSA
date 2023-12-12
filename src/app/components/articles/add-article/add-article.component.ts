// add-article.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/ArticleService';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  article: Article = { title: '', text: '' };
  articleForm: FormGroup;
  formErrors: any = {};

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.createForm();
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

  onSubmit() {
    if (this.articleForm.valid) {
      // Call the service to add the article
      this.articleService.addArticle(this.article).subscribe(
        response => {
          console.log('Article added successfully', response);
          // Optionally, you can navigate to a different page or show a success message.
        },
        error => {
          console.error('Error adding article', error);
          // Handle error, show an error message, etc.
        }
      );
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
