import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null)
    });
  }

  onSubmit(){
    const category = {
      'name': this.registerForm.controls['name'].value,
      'description': this.registerForm.controls['description'].value
    };

    this.apiService.newCategory(category)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        },
        () => {
          this.router.navigate(['categories']);
        }
      );
  }

  onCancel() {
    this.router.navigate(['categories']);
  }
}
