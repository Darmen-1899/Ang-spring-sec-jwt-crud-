import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {User} from "../user.model";
import {UserService} from "../user.service";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User()
  users: User[] = []

  showError = false

  constructor(private _userService : UserService,private addDialogWindow : MatDialog) { }

  ngOnInit(): void {
  }

  addUserComponent():void
  {
    if(!this.user.isEmpty())
    {
        this.showError = true
        return
    }
    this._userService.addUser(this.user).subscribe(()=>this.closeWindow());
  }

  closeWindow(): void {
    this.addDialogWindow.closeAll();
  }


}
