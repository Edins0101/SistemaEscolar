import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private httpClient: HttpClient) { }

  getMatriculas() {
    return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/');
  }

   searchMatricula(codigoMatricula) {
    return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/' + codigoMatricula);
  }

   deleteMatricula(matricula) {
    return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/remover/', matricula);
  }

   saveMatricula(matricula) {
    return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/matricula/incluir/', matricula);
  }
}
