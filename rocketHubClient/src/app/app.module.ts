import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./user/user.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing-routing.module";
import { AddUserComponent } from './user/add-user/add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import { LogoutComponent } from './user/logout/logout.component';
import {BasicAuthHtppInterceptorServiceService} from './login/httpInterceptor/basic-auth-htpp-interceptor-service.service';
import { HomeComponent } from './home/home.component'




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient,UserService , { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorServiceService, multi: true } ],
  bootstrap: [AppComponent],
  entryComponents:[UserComponent]
})
export class AppModule { }
