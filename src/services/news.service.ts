import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  fetch({limit}) {
    return this.http.get(`https://techpoint.africa/wp-json/wp/v2/posts?per_page=10&page=${limit}&_embed`);
  }
}
