import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrentUserService} from '../../services/user.service';
import {ApiService} from '../../services/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  message = '';
  private req: any;
  private email: string;
  constructor(private userService: CurrentUserService,
              private apiService:ApiService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
      });
  }

  onSubmit() {
    this.req = this.generateRequest();
    this.email = this.loginForm.controls['email'].value;
    this.apiService.getToken(this.req)
      .subscribe(
        (data) => {
          this.userService.resolveLogin(data);
          this.userService.setUser(this.email);
          this.loginForm.reset();
        },
        (err: HttpErrorResponse) => {
          console.log(err.statusText);
          this.message = 'Invalid email or password!';
        }
      );
    this.userService.userActivated
      .subscribe(
        (value: string) => {
          if (value) {
            if (value === 'admin'){
              this.router.navigate(['/admin-dashboard']);
            } else {
              this.router.navigate(['/customer-dashboard']);
            }
          }
        }
      );

  }

  private generateRequest() {
    return {
      'grant_type': this.userService.config.api_grant_type,
      'client_id': this.userService.config.api_client_id,
      'client_secret': this.userService.config.api_client_secret,
      'username': this.loginForm.controls['email'].value,
      'password': this.loginForm.controls['password'].value
    }
  }

  ngOnDestroy() {
    //this.userService.userActivated.unsubscribe();
  }

}
