import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private url="http://localhost:8080/usuarios"
  constructor(private httpCliente:HttpClient) { }

  //Metodo para obtener los ultimos inicios de sesion
}
