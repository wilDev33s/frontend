import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { User } from '../editar-usuario/models/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user:User = new User();
  constructor(private _service:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("auth_token") === null){
      this.router.navigate(["login"]);
    }
  }

  addUser(user:User){
    this._service.addUser(user).subscribe(data=>{
      if(data !== null){
        alert('Usuario creado exitosamente.....');
        this.router.navigate(['usuario']);
      }
    })

  }

}
