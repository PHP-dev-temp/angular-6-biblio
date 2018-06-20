import {Component, OnInit} from '@angular/core';
import {UserRentals} from '../../models/user-rentals.model';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-user-rentals',
  templateUrl: './user-rentals.component.html',
  styleUrls: ['./user-rentals.component.css']
})
export class UserRentalsComponent implements OnInit {

  rentals: UserRentals[];
  id: number;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    this.apiService.getUserRentals(this.id)
      .subscribe(
        (data: UserRentals[]) => {
          this.rentals = data;
        }
      );
  }

  onComplete(rentalId) {
    this.apiService.updateUserRentals(this.id, rentalId)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
    for (let i=1; i<this.rentals.length; i++) {
      if (this.rentals[i].id == rentalId){
        this.rentals[i].status = 'complete';
      }
    }
  }

  onNewRental() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
