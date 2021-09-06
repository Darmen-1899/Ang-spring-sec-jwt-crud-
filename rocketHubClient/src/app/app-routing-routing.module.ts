import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./login/auth-guard.service";
import {LogoutComponent} from "./user/logout/logout.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'users', component: UserComponent , canActivate:[AuthGuardService]},
  {path:'home', component:HomeComponent, canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
