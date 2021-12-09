import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario:any; 
  user: User = new User();
  constructor(private _servicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("auth_token") === null){
      this.router.navigate(["login"]);
    }else{
      this.Editar();
    }
   
  }

  

  Editar(){
    let serial = localStorage.getItem("id");
    console.log(serial);
    if (serial != null){
      this._servicio.getUser(+serial).subscribe(data=>{
        this.usuario = data;

        console.log(this.usuario[0].id)
        console.log(this.usuario[0].Nombres)
        console.log(this.usuario[0].usuario)
        console.log(this.usuario[0].pass)

        this.user.id = this.usuario[0].id;
        this.user.Nombres = this.usuario[0].Nombres;
        this.user.usuario = this.usuario[0].usuario;
        this.user.pass = this.usuario[0].pass;
       
      });
    }
   
  }

  updateUser(user:User){
    this._servicio.updateUser(user).subscribe(data=>{
      if(data !== null){
        alert('Usuario actualizado....');
        this.router.navigate(['usuario']);
      }
    })
  }

  

}
