import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../models/registerRequest';
import { AuthSuccess } from '../models/authSuccess';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/loginRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathService = environment.baseUrl + 'auth';

  constructor(private httpClient: HttpClient) { }

  public register(registerRequest: RegisterRequest): Observable<AuthSuccess> {
    return this.httpClient.post<AuthSuccess>(`${this.pathService}/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<AuthSuccess> {
    return this.httpClient.post<AuthSuccess>(`${this.pathService}/login`, loginRequest);
  }

  public me(): Observable<any> {
    return this.httpClient.get<any>(`${this.pathService}/me`);
  }
}
