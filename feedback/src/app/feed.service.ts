import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class FeedService {

  result: any;
  constructor(private http: HttpClient) {}

  addFeed(name, feedback) {
    const uri = 'http://localhost:4000/feeds/add';
    const obj = {
      name: name,
      feedback: feedback
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getFeed() {
    const uri = 'http://localhost:4000/feeds';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editFeed(id) {
    const uri = 'http://localhost:4000/feeds/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateFeed(name, feedback, id) {
    const uri = 'http://localhost:4000/feeds/update/' + id;

    const obj = {
      name: name,
      feedback: feedback
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteFeed(id) {
    const uri = 'http://localhost:4000/feeds/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
