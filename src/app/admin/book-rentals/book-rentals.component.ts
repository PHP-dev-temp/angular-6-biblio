import { Component, OnInit } from '@angular/core';
import {UserRentals} from '../../models/user-rentals.model';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {BookRentals} from '../../models/book-rentals.model';

@Component({
  selector: 'app-book-rentals',
  templateUrl: './book-rentals.component.html',
  styleUrls: ['./book-rentals.component.css']
})
export class BookRentalsComponent implements OnInit {

  rentals: BookRentals[];
  id: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.apiService.getBookRentals(this.id)
      .subscribe(
        (data: BookRentals[]) => {
          this.rentals = data;
        }
      );
  }

}
