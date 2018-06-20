import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: CurrentUserService, private router: Router) { }

  ngOnInit() {
    this.userService.resetUser();
    this.userService.userActivated.next('');
    this.router.navigate(['/']);
  }

}
