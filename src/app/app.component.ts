import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {Author} from './models/author.model';
import {User} from './models/user.model';
import {Book} from './models/book.model';

interface  UserResponce {
  login: string,
  name: string,
  company: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
