import { Component, OnInit } from '@angular/core';
import {Author} from '../../models/author.model';
import {ApiService} from '../../services/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserService} from '../../services/user.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[];
  selectedAuthor: Author;
  showModal = false;
  filterString = '';
  isAdmin = false;

  constructor(private apiService: ApiService,
              private userService: CurrentUserService) { }

  ngOnInit() {
    this.apiService.getAuthors()
      .subscribe(
        (authors: Author[]) => {
          this.authors = authors;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.isAdmin = this.userService.userIsAdmin();
  }

  selectAuthor(authorid: number) {
    this.apiService.getAuthor(authorid)
      .subscribe(
        (data: Author) => {
          this.selectedAuthor = data['data'];
          this.showModal = !this.showModal;
        }
      );
  }


}
