import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private apiServerUrl = environment.apiBaseUrl;
  constructor(private  _httpService : HttpClient) { }



  public getUsers(): Observable<User[]> {
    return this._httpService.get<User[]>(`${this.apiServerUrl}/users/all`);
  }

  public getUser(id: number ): Observable<any> {
    return this._httpService.get(`${this.apiServerUrl}/${id}`);
  }

  public addUser(user : User): Observable<User>{
    return this._httpService.post<User>(`${this.apiServerUrl}/users/add`,user);
  }

  public updateUser(id: number, user: User ): Observable<User>{
    return this._httpService.put<User>(`${this.apiServerUrl}/users/update/${id}`,user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this._httpService.delete<void>(`${this.apiServerUrl}/users/delete/${userId}`);
  }


}
