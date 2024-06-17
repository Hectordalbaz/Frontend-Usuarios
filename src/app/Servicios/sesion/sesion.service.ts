import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../../Clases/sesion/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private url="http://localhost:8080/sesiones"
  constructor(private httpCliente:HttpClient) { }

  //Metodo para obtener los ultimos inicios de sesion
  obtenerSesiones():Observable<Sesion[]>{
    return this.httpCliente.get<Sesion[]>(`${this.url}`)
  }
}
