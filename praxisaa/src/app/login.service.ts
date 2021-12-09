import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: String = 'https://auten-autoriz.herokuapp.com';

  constructor(private http: HttpClient) {}

  //Login
  login(form: any) {
    return this.http.post(`${this.url}/login`, form);
  }
}
