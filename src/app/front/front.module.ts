import { NgModule } from '@angular/core';
import {BookComponent} from './book/book.component';
import {CommonModule} from '@angular/common';
import { BookListComponent } from './book/book-list/book-list.component';
import { SingleBookComponent } from './book/single-book/single-book.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { SingleAuthorComponent } from './author/single-author/single-author.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    SingleBookComponent,
    AuthorComponent,
    AuthorListComponent,
    SingleAuthorComponent,
    CategoryComponent,
    CategoryListComponent,
    SingleCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class FrontModule {}
