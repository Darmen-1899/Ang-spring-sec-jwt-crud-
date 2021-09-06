import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user/user.model";
import {LoginService} from "./login.service";
import {UserComponent} from "../user/user.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false



  constructor(private loginService : LoginService , private router : Router) { }

  ngOnInit(): void {this.loginService.logOut()}

  checkLogin() {

    (this.loginService.login(this.username , this.password).subscribe(
        data => {

          this.router.navigate(['/home'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          console.log(error.message)

        }
      )
    );

  }

}
