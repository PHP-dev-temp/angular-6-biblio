import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category.model';
import {ApiService} from '../../../services/api.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from '../../../models/book.model';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  books: Book[];
  id: number;
  cname: string;
  selectedBook: Book;
  showModal = false;
  filterString = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.apiService.getCategoryBooks(this.id)
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      );
    this.apiService.getCategory(this.id)
      .subscribe(
        (data: Category) => {
          this.cname = data['data'].name;
        }
      );
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
