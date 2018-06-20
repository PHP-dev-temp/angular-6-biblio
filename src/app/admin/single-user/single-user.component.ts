import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user = new User();
  id: number;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.apiService.getUser(this.id)
      .subscribe(
        (data: User) => {
          this.user = data['data'];
        }
      );
  }

  editUser() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onRentals() {
    this.router.navigate(['rentals'], { relativeTo: this.route });
  }


}
