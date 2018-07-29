import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../feed.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Feed';
  angForm: FormGroup;
  constructor(private feedservice: FeedService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      feedback: ['', Validators.required ]
   });
  }
  addCoin(name, feedback) {
      this.feedservice.addFeed(name, feedback);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
