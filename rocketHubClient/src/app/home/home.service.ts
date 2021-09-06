import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user/user.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private  _httpService : HttpClient) { }



}
