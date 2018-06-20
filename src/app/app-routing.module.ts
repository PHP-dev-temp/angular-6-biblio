import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {CustomerGuard} from './services/ccustomer-guard';
import {AdminGuard} from './services/admin-guard';

import { HomeComponent } from './core/home/home.component';
import {BookComponent} from './front/book/book.component';
import {AuthorComponent} from './front/author/author.component';
import {CategoryComponent} from './front/category/category.component';
import {SingleCategoryComponent} from './front/category/single-category/single-category.component';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {UserInfoComponent} from './customer/user-info/user-info.component';
import {RentalsComponent} from './customer/rentals/rentals.component';
import {CustomerComponent} from './customer/customer.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './admin/user/user.component';
import {SingleUserComponent} from './admin/single-user/single-user.component';
import {EditUserComponent} from './admin/edit-user/edit-user.component';
import {AddUserComponent} from './admin/add-user/add-user.component';
import {UserRentalsComponent} from './admin/user-rentals/user-rentals.component';
import {UserRentalsNewComponent} from './admin/user-rentals-new/user-rentals-new.component';
import {AuthorNewComponent} from './admin/author-new/author-new.component';
import {CategoryNewComponent} from './admin/category-new/category-new.component';
import {BookNewComponent} from './admin/book-new/book-new.component';
import {BookEditComponent} from './admin/book-edit/book-edit.component';
import {BookRentalsComponent} from './admin/book-rentals/book-rentals.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id', component: SingleCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'customer-dashboard', component: CustomerComponent, canActivate: [CustomerGuard] },
  { path: 'info', component: UserInfoComponent, canActivate: [CustomerGuard] },
  { path: 'rentals', component: RentalsComponent, canActivate: [CustomerGuard] },
  { path: 'admin-dashboard', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin-users', component: UserComponent, canActivate: [AdminGuard] },
  { path: 'admin-users/new', component: AddUserComponent, canActivate: [AdminGuard] },
  { path: 'admin-users/:id', component: SingleUserComponent, canActivate: [AdminGuard] },
  { path: 'admin-users/:id/edit', component: EditUserComponent, canActivate: [AdminGuard] },
  { path: 'admin-users/:id/rentals', component: UserRentalsComponent, canActivate: [AdminGuard] },
  { path: 'admin-users/:id/rentals/new', component: UserRentalsNewComponent, canActivate: [AdminGuard] },
  { path: 'admin-authors/new', component: AuthorNewComponent, canActivate: [AdminGuard] },
  { path: 'admin-categories/new', component: CategoryNewComponent, canActivate: [AdminGuard] },
  { path: 'admin-books/new', component: BookNewComponent, canActivate: [AdminGuard] },
  { path: 'admin-books/new', component: BookNewComponent, canActivate: [AdminGuard] },
  { path: 'books/:id/edit', component: BookEditComponent, canActivate: [AdminGuard] },
  { path: 'books/:id/rentals', component: BookRentalsComponent, canActivate: [AdminGuard] },
  { path: '**', component: HomeComponent },
  //{ path: 'front', loadChildren: './front/front.module#FrontComponent' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
