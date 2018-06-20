import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {FrontModule} from './front/front.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module';
import {CustomerModule} from './customer/customer.module';

import {HttpAuthInterceptor} from './services/api.interceptor';
import {ApiService} from './services/api.service';
import {CurrentUserService} from './services/user.service';
import {CustomerGuard} from './services/ccustomer-guard';
import {AdminGuard} from './services/admin-guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FrontModule,
    AuthModule,
    CustomerModule,
    CoreModule,
    AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    ApiService,
    CurrentUserService,
    CustomerGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
