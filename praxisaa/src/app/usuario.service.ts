import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './editar-usuario/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: String = 'https://auten-autoriz.herokuapp.com';

  constructor(private http: HttpClient) {}

  private t = localStorage.getItem('auth_token');

  private headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.t,
  });

  private httpOptions = {
    headers: this.headers_object,
  };

  //métodos
  getUsers() {
    return this.http.get<User[]>(`${this.url}/all`, this.httpOptions);
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.url}/${user.id}`, this.httpOptions);
  }

  getUser(id: number) {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  updateUser(user: User) {
    return this.http.put<User>(
      `${this.url}/${user.id}`,
      user,
      this.httpOptions
    );
  }

  addUser(user: User) {
    return this.http.post<User>(`${this.url}/add`, user, this.httpOptions);
  }
}
