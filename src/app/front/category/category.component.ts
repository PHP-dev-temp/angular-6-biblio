import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/category.model';
import {ApiService} from '../../services/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrentUserService} from '../../services/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  isAdmin = false;

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: CurrentUserService) { }

  ngOnInit() {
    this.apiService.getCategories()
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.isAdmin = this.userService.userIsAdmin();
  }

  selectCategory(categoryid: number) {
    this.router.navigate([categoryid], {relativeTo: this.route});
  }

}
