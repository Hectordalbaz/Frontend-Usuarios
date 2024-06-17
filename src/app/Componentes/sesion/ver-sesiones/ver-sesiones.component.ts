import { Component } from '@angular/core';
import { Sesion } from '../../../Clases/sesion/sesion';
import { SesionService } from '../../../Servicios/sesion/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-sesiones',
  standalone: true,
  imports: [],
  templateUrl: './ver-sesiones.component.html',
  styleUrl: './ver-sesiones.component.css'
})
export class VerSesionesComponent {
  sesiones:Sesion[] | undefined;
  errores: any=[];

  private constructor(private sesionServicio:SesionService,private router:Router){}

  ngOnInit(): void{
    this.obtenerSesiones();
  }

  private obtenerSesiones(){
    this.sesionServicio.obtenerSesiones().subscribe(sesion =>{
      this.sesiones=sesion;
    },error=>this.errores.push(error.message));
  }
}
