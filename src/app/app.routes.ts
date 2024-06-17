import { Routes } from '@angular/router';
import { VerSesionesComponent } from './Componentes/sesion/ver-sesiones/ver-sesiones.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegUsuarioComponent } from './Componentes/usuario/reg-usuario/reg-usuario.component';

export const routes: Routes = [
    {path: 'sesiones', component:VerSesionesComponent},
    {path: 'login',component:LoginComponent},
    {path: 'registrar',component:RegUsuarioComponent}
];
