import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {UserService} from "./user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from '@angular/material/dialog';
import {error} from "@angular/compiler/src/util";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {LogoutComponent} from "./logout/logout.component";

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit{

  users : User[] = [] ;
  user = new User();

  constructor(private userService: UserService,private dialog: MatDialog , private router : Router) { }


  ngOnInit() {
    this.getUsers();
  }

  public getUsers():void{
    this.userService.getUsers().subscribe(
      (response: User[]) =>{
        this.users = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
    }

    )
  }




  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  openDialogEdit(user : User) : void{
    const dialogRef = this.dialog.open(EditUserComponent,{
      width: '250px'
    });
    dialogRef.componentInstance.user = user
    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });

  }




  public deleteUser(id : number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }

    );
  }


  public searchUser(key: string): void {
    const results : User[] = [];
    for (const user of this.users){
      if (user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.position.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }

}
