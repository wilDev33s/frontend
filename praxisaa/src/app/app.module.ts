import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import { LoginService } from './login.service';
import { UsuarioService } from './usuario.service';

//formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AddComponent } from './add/add.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'editar', component:EditarUsuarioComponent},
  {path:'agregar', component:AddComponent},
  {path: 'logout', component:LogoutComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    EncabezadoComponent,
    FooterComponent,
    EditarUsuarioComponent,
    AddComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [LoginService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
