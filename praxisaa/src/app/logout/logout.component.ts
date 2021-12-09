import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  private respuesta:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.respuesta = confirm("¿Desea cerrar la Sesión?");
    if (this.respuesta == true) {
      localStorage.removeItem("auth_token");  
      localStorage.removeItem("id");
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['usuario']);
      
    }
  
  }

}
