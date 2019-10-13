import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import {  finalize } from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  loader = true;

  posts = this.newsService.fetch({limit: 1}).pipe(
    finalize(() => this.loader = false)
  );

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

}
