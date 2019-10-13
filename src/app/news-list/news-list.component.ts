import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  posts = this.newsService.fetch({limit: 1});

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

}
