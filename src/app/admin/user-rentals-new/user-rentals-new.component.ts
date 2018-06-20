import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-user-rentals-new',
  templateUrl: './user-rentals-new.component.html',
  styleUrls: ['./user-rentals-new.component.css']
})
export class UserRentalsNewComponent implements OnInit {

  books: Book[];
  filterString = '';
  id: number;
  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) { }


  ngOnInit() {
    this.apiService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
  }

  selectBook(id) {
    this.apiService.setUserRentals(this.id, {'book': id, 'quantity': 1})
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
  }

}
