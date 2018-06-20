import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book = new Book();
  id: number;
  categories: Category[];
  catIds = [];

  registerForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'description': new FormControl(null),
      'quantity': new FormControl(null, [Validators.required]),
      'categories': new FormControl(null)
    });
    this.apiService.getCategories()
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        }
      );
    this.apiService.getBook(this.id)
      .subscribe(
        (data: Book) => {
          this.book = data['data'];
          for (let cat of this.book.categories){
            this.catIds.push(cat.id);
          }
          this.registerForm.controls['description'].setValue(this.book.description);
          this.registerForm.controls['quantity'].setValue(this.book.inventory.quantity);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        });
  }

  onSubmit(){
    console.log(this.registerForm);
    const book = {
      'description': this.registerForm.controls['description'].value,
      'quantity': this.registerForm.controls['quantity'].value,
      'categories': ''
    };
    let catIds = this.registerForm.controls['categories'].value;
    if (catIds.length) book.categories = catIds.join();

    this.apiService.updateBook(this.book.id, book)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        },
        () => {
          this.router.navigate(['books']);
        }
      );
  }

  onCancel() {
    this.router.navigate(['books']);
  }

}
