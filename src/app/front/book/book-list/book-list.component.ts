import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() book: Book;

  imagesLink = 'http://biblio.milton-soft.com/images/';
  constructor() { }

  ngOnInit() {
  }

}
