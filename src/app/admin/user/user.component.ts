import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  filterString = '';

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
  }

  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
