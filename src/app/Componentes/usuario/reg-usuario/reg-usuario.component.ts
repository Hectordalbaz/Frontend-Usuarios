import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { UsuarioService } from '../../../Servicios/usuario/usuario.service';
import { Usuario } from '../../../Clases/usuario/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-usuario',
  standalone: true,
  templateUrl: './reg-usuario.component.html',
  styleUrl: './reg-usuario.component.css',
  imports: [MenuComponent, FormsModule],
})
export class RegUsuarioComponent {
  usuario: Usuario=new Usuario();
  completado: string | undefined;
  errores: any = [];
  constructor(private servicioUsuario: UsuarioService) {}
  onSubmit() {
    
    this.usuario.estado = true;
    this.usuario.fec_hor_creacion=new Date();
    this.usuario.fec_hor_ult_mod=new Date();
    this.usuario.usu_ult_mod="";
    this.servicioUsuario.registrarUsuario(this.usuario).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario registrado con exito');
      },
      (error) => this.errores.push(error.message)
    );
    setTimeout(() => {
      this.errores = [];
    }, 5000);


  }
}
