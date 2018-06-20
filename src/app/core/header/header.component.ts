import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentUserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isVisible = true;
  adminUser = false;
  customerUser = false;
  constructor(private userService: CurrentUserService) { }

  ngOnInit() {
    this.userService.userActivated
      .subscribe(
        (value: string) => {
          if (value) {
              if (value === 'admin'){
                this.adminUser = true;
              } else {
                this.customerUser = true;
              }
          } else {
            this.adminUser = false;
            this.customerUser = false;
          }
        }
      );
  }

  toggleNav(){
    this.isVisible = !this.isVisible;
  }

  ngOnDestroy() {
    //this.userService.userActivated.unsubscribe();
  }

}
