import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'password_confirmation': new FormControl(null,  [Validators.required, Validators.minLength(6)]),
      'address': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    const user = {
      'name': this.registerForm.controls['name'].value,
      'email': this.registerForm.controls['email'].value,
      'password': this.registerForm.controls['password'].value,
      'password_confirmation': this.registerForm.controls['password_confirmation'].value,
      'address': this.registerForm.controls['address'].value,
      'city': this.registerForm.controls['city'].value,
      'phone': this.registerForm.controls['phone'].value,
      'role': 'customer'
    };
    this.apiService.newUser(user)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        },
        () => {
          this.router.navigate(['admin-users']);
        }
      );
  }

  onCancel() {
    this.router.navigate(['admin-users']);
  }

}
