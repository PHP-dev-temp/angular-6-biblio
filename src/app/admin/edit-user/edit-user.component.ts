import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user = new User();
  id: number;

  registerForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'role': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required])
    });
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        }
      );
    this.apiService.getUser(this.id)
      .subscribe(
        (data: User) => {
          this.user = data['data'];
          this.registerForm.controls['role'].setValue(this.user.role);
          this.registerForm.controls['name'].setValue(this.user.name);
          this.registerForm.controls['address'].setValue(this.user.address);
          this.registerForm.controls['city'].setValue(this.user.city);
          this.registerForm.controls['phone'].setValue(this.user.phone);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        });
  }

  onSubmit(){
    const user = {
      'name': this.registerForm.controls['name'].value,
      'address': this.registerForm.controls['address'].value,
      'city': this.registerForm.controls['city'].value,
      'phone': this.registerForm.controls['phone'].value,
      'role':  this.registerForm.controls['role'].value,
    };
    this.apiService.updateUser(this.user.id, user)
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
