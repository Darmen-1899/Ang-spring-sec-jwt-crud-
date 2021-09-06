import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {User} from "../user/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginComponent} from "../login/login.component";
import {BasicAuthHtppInterceptorServiceService} from "../login/httpInterceptor/basic-auth-htpp-interceptor-service.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route : Router,private homeService : HomeService) { }

  ngOnInit(): void {


  }

  getUsers() {
    this.route.navigate(['/users'])
  }



}
