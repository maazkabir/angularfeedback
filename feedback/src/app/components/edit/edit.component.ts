import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from './../../feed.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  feed: any;
  angForm: FormGroup;
  title = 'Edit Feed';
  constructor(private route: ActivatedRoute, private router: Router, private service: FeedService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      feedback: ['', Validators.required ]
   });
  }

  updateFeed(name, feedback) {
    this.route.params.subscribe(params => {
    this.service.updateFeed(name, feedback, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.feed = this.service.editFeed(params['id']).subscribe(res => {
        this.feed = res;
      });
    });
  }
}
