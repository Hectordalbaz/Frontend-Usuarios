import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private url="http://localhost:8080/usuarios"
  constructor(private httpCliente:HttpClient) { }

  //Metodo para registrar el usuario
  public registrarUsuario(usuario:any){
    return this.httpCliente.post(`${this.url}`,usuario);
  }
}
