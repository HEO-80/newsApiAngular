import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsItem {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<NewsItem[]>('http://localhost:8080/news').subscribe(
      (response) => {
        this.news = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
