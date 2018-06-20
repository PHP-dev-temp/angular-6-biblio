import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './user-info/user-info.component';
import { RentalsComponent } from './rentals/rentals.component';
import { CustomerComponent } from './customer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
  UserInfoComponent,
  RentalsComponent,
  CustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomerModule {}
