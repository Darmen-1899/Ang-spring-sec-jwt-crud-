import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user! : User
  showError = false;
  ngOnInit(): void {

  }

  constructor(private _userService : UserService,private editDialog : MatDialog) { }

  updateUser(){
    console.log(this.user)
    console.log(this.user.id)
    this._userService.updateUser(this.user.id , this.user).subscribe(()=>this.closeWindow());
  }

  closeWindow(): void {
    this.editDialog.closeAll();
  }


}
