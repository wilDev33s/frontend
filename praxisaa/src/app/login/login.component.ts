import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private token: any
  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  miFormulario = new FormGroup({   
    user: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required)
  });

  onSubmit(){
    console.log(this.miFormulario.value);
    this._service.login(this.miFormulario.value).subscribe(data=>{    
      this.token = data;
       console.log(this.token)
      if(this.token.token !== false){
         console.log(this.token.token);
         this.router.navigate(["usuario"]);
         localStorage.setItem('auth_token', this.token.token);
     }else{
             alert('Usuario o contraseña invalida');
             this.miFormulario.reset();
      }
     
  })
  }



}
