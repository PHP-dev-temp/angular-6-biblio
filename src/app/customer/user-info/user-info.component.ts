import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private userService: CurrentUserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
