import { FeedService } from './../../feed.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Feed } from '../../Feed';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  feeds: any;

  constructor(private http: HttpClient, private service: FeedService) {}

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.service.getFeed().subscribe(res => {
      this.feeds = res;
    });
  }

  deleteFeed(id) {
    this.service.deleteFeed(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
