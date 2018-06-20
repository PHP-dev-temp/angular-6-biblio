import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {SharedModule} from '../shared/shared.module';
import { SingleUserComponent } from './single-user/single-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRentalsComponent } from './user-rentals/user-rentals.component';
import { UserRentalsNewComponent } from './user-rentals-new/user-rentals-new.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { BookNewComponent } from './book-new/book-new.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookRentalsComponent } from './book-rentals/book-rentals.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    UserListComponent,
    SingleUserComponent,
    EditUserComponent,
    AddUserComponent,
    UserRentalsComponent,
    UserRentalsNewComponent,
    CategoryNewComponent,
    BookNewComponent,
    AuthorNewComponent,
    BookEditComponent,
    BookRentalsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule {}
