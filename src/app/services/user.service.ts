import {Injectable, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ApiService} from './api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Subject} from 'rxjs/index';

@Injectable()
export class CurrentUserService {

  private isLoged = false;
  private isAdmin = false;
  private user: User;
  private token_key = '';
  public config = {
    default_api_token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY4MjI3NjUzYjlkYWEwZGIwOGI2OTgzMGI3YzBiMjEzMWU1NjI5NjYzMjlhMjYwZTE3MTQzYjdkNmIwMjg3NDY1ODY4YjhkYTU1NzllYTQzIn0.eyJhdWQiOiI0IiwianRpIjoiZjgyMjc2NTNiOWRhYTBkYjA4YjY5ODMwYjdjMGIyMTMxZTU2Mjk2NjMyOWEyNjBlMTcxNDNiN2Q2YjAyODc0NjU4NjhiOGRhNTU3OWVhNDMiLCJpYXQiOjE1Mjk0MTQyNjEsIm5iZiI6MTUyOTQxNDI2MSwiZXhwIjoxODQ1MDMzNDYxLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.pEUs1bpvWrLgSH8neTMwc-GBXpnZ0BuEpPZKuSl2A13L-23WCgiC9sIrxj0HC8bFHuomp7LWo7V1dj1YDnM85t-KrI5JzZzDDS7YSnSj_7qwIy2_t5P4eOIMtIb3rcwjvZLZy8DccGh5F1yYszz5oGzvJnVBsDVxjVrA4z4qxfii6Br6jtRmW7qYSJwzzz456n1mzgOfNq5HIp7AgpU9tHS1yvWewGH75iZEsH9uxkiaPWnafeL8w2POxSlpoCUX_yP50FQgvwQWEC9SI-Mn8CvtzSXTFuLUG_Npku7FZEEi8qEJLtyjlSBbQTWSZ6mqeTe3xx3t6q6z-Qq0etL9vUoDvqAQtM-rq3Kx86NJ-Fug-7TSGyDlDIUDW0yuX2-IoQncmnz5HJ3i2bp5vPTqrrZZldwXV8CussQDsSIiGy9iJj-aCA6oK0bnkjTmmBsfaQMMhfLPiPOuFF6lk5vONoZZWJ5aegVly9SJ5mdyVSfsBSzFRYS3kl_fY639p0Z8K_izrpvlUnKZRqrVLG4jEduhOWWgDpJ3t_1Dh9EigzYO32vJ4KZC53hzkc2pBzIOZ4CBNTjY8wnGPrPddTHnxh1D0OUaa0LA2ZDZkY3jdv9KJCgXfdFsHQOJCR3jBE9q5OwalP4QIGHYxm4vtb8EFCgm0sAW-ICFhupHX7L3fns',
    default_grant_type: 'client_credentials',
    api_grant_type: 'password',
    api_client_id: '4',
    api_client_secret: 'nNfICscxDOfXeGJD01u8qqodSvP2Y388CwCAX6uk'
  };
  userActivated = new Subject();

  constructor(private apiService: ApiService) {}

  getToken() {
    if (this.token_key === '') this.token_key = this.config.default_api_token;
    return this.token_key;
  }

  resolveLogin(data: any) {
    if (data['access_token']) {
      this.token_key = 'Bearer ' + data['access_token'];
    } else {
      this.token_key = this.config.default_api_token;
    }
  }

  setUser(email: string) {
    this.apiService.getUserByEmail(email)
      .subscribe(
        (data: User) => {
          console.log(data);
          this.user = data['data'];
          this.isLoged = true;
          this.isAdmin = this.user.role === 'admin';
          this.userActivated.next(this.user.role);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
  }
  resetUser() {
    this.user = new User();
    this.isLoged = false;
    this.isAdmin = false;
  }

  userIslogged() {
    return this.isLoged;
  }
  userIsAdmin() {
    return this.isAdmin;
  }
  getUser() {
    return this.user;
  }
}
