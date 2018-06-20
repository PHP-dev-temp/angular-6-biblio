import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Book} from '../../models/book.model';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserService} from '../../services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  selectedBook: Book;
  showModal = false;
  filterString = '';
  isAdmin = false;

  constructor(private apiService: ApiService,
              private userService: CurrentUserService) { }

  ngOnInit() {
    this.apiService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.isAdmin = this.userService.userIsAdmin();
  }

  selectBook(bookid: number) {
    this.apiService.getBook(bookid)
      .subscribe(
        (data: Book) => {
          this.selectedBook = data['data'];
          this.showModal = !this.showModal;
        }
      );
  }

}
