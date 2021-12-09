import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { User } from '../editar-usuario/models/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:any = []
  constructor(private _service:UsuarioService, private router:Router) {
    this._service.getUsers().subscribe(data=>{
      console.log(data);
      this.usuarios = data
      if(this.usuarios.token === false){
        console.log(this.usuarios.message);
        this.usuarios = [];
      }
    })
   }

  ngOnInit(): void {
    console.log(localStorage.getItem("auth_token"));
    if (localStorage.getItem("auth_token") === null){
      this.router.navigate(["login"]);
    }
  }

  Delete(user:User){
    this._service.deleteUser(user).subscribe(data=>{
      if (data !== null){
        alert("Usuario Eliminado....");
        this._service.getUsers().subscribe(data=>{
          this.usuarios = data
          if(this.usuarios.token === false){
            console.log(this.usuarios.message);
            this.usuarios = [];
          }
        }) 
      }
           
   })
 }

 Editar(id:number){
  localStorage.setItem("id",id.toString());
  this.router.navigate(["editar"])
 }

}
