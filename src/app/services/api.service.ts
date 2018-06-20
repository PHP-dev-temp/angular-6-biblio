import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Author} from '../models/author.model';
import {Book} from '../models/book.model';
import {BookRentals} from '../models/book-rentals.model';
import {Category} from '../models/category.model';
import {User} from '../models/user.model';
import {UserRentals} from '../models/user-rentals.model';

@Injectable()
export class ApiService {

  private config = {
    baseUrl: 'http://biblio.milton-soft.com/api',
  };

  constructor(private http: HttpClient) {}

  getAuthors() { return this.http.get<Author[]>(this.config.baseUrl + '/authors'); }
  newAuthor(data) { return this.http.post(this.config.baseUrl + '/authors', data, {headers: {enctype: 'multipart/form-data'}}); }
  getAuthor(id) { return this.http.get<Author>(this.config.baseUrl + '/authors/' + id); }
  getAuthorBooks(id) { return this.http.get<Book[]>(this.config.baseUrl + '/authors/' + id + '/books'); }

  getBooks() { return this.http.get<Book[]>(this.config.baseUrl + '/books'); }
  newBook(data) { return this.http.post(this.config.baseUrl + '/books', data, {headers: {enctype: 'multipart/form-data'}}); }
  updateBook(id, data) { return this.http.put(this.config.baseUrl + '/books/' + id, data); }
  getBook(id) { return this.http.get<Book>(this.config.baseUrl + '/books/' + id); }
  getBookRentals(id) { return this.http.get<BookRentals[]>(this.config.baseUrl + '/books/' + id + '/rentals'); }

  getCategories() { return this.http.get<Category[]>(this.config.baseUrl + '/categories'); }
  newCategory(data) { return this.http.post(this.config.baseUrl + '/categories', data); }
  getCategory(id) { return this.http.get<Category>(this.config.baseUrl + '/categories/' + id); }
  getCategoryBooks(id) { return this.http.get<Book[]>(this.config.baseUrl + '/categories/' + id + '/books'); }

  getUsers() { return this.http.get<User[]>(this.config.baseUrl + '/users'); }
  newUser(data) { return this.http.post(this.config.baseUrl + '/users', data); }
  updateUser(id, data) { return this.http.put(this.config.baseUrl + '/users/' + id, data); }
  updateUserRentals(id, rentalid) { return this.http.put(this.config.baseUrl + '/users/' + id + '/rentals/' + rentalid, {}); }
  getUser(id) { return this.http.get<User>(this.config.baseUrl + '/users/' + id); }
  getUserByEmail(email) { return this.http.get<User>(this.config.baseUrl + '/user/' + email); }
  getUserRentals(id) { return this.http.get<UserRentals[]>(this.config.baseUrl + '/users/' + id + '/rentals'); }
  setUserRentals(id, data) { return this.http.post(this.config.baseUrl + '/users/' + id + '/rentals', data); }

  getToken(req) { return this.http.post(this.config.baseUrl + '/oauth/token', req); }
}
