import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article$: BehaviorSubject<any> = this.ds.article;
  article: Article;
  recentArticles$: BehaviorSubject<any> = this.ds.articles;

  constructor(private ds: DataService, private ar: ActivatedRoute) {
    this.ar.params.forEach((params) => {
      this.ds.read('cikkek', params.seo);
    });
    this.article$.subscribe((data) => (this.article = data[0]));
    this.ds.read('cikkek');
  }

  ngOnInit(): void {}
}
