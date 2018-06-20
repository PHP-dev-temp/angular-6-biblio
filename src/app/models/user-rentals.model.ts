import {Book} from './book.model';

export class UserRentals {

  public id: number;
  public status: string;
  public created_at: string;
  public end_date: string;
  public book: Book;

  constructor(
    id: number = 0,
    status: string = '',
    created_at: string = '',
    end_date: string = '',
    book: Book = new Book()) {

    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.end_date = end_date;
    this.book = book;
  }

}
