import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {CurrentUserService} from '../../services/user.service';
import {UserRentals} from '../../models/user-rentals.model';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  rentals: UserRentals[];
  user: User;

  constructor(private userService: CurrentUserService, private apiService: ApiService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.apiService.getUserRentals(this.user.id)
      .subscribe(
        (data: UserRentals[]) => {
          this.rentals = data;
        }
      );
  }

}
