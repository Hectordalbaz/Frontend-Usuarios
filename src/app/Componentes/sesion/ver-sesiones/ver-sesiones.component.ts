import { Component, OnInit } from '@angular/core';
import { Sesion } from '../../../Clases/sesion/sesion';
import { SesionService } from '../../../Servicios/sesion/sesion.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../menu/menu.component";

@Component({
    selector: 'app-ver-sesiones',
    standalone: true,
    templateUrl: './ver-sesiones.component.html',
    styleUrl: './ver-sesiones.component.css',
    imports: [RouterOutlet, CommonModule, MenuComponent]
})
export class VerSesionesComponent implements OnInit{
  sesiones:Sesion[] | undefined;
  errores: any=[];

  constructor(private sesionServicio:SesionService,private router:Router){}

  ngOnInit(): void{
    this.obtenerSesiones();
  }

  private obtenerSesiones(){
    this.sesionServicio.obtenerSesiones().subscribe(sesion =>{
      this.sesiones=sesion;
    },error=>this.errores.push(error.message));

    setTimeout(()=>{
      this.errores=[];
    },5000);
  }
}
