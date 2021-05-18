import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

     getCursos() {
      return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/');
    }

     searchCurso(nameCurso) {
      return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/' + nameCurso);
    }

     deleteCurso(curso) {
      return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/remover/', curso);
    }

     saveCurso(curso) {
      return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/incluir/', curso);
    }

     editCurso(curso) {
      return this.httpClient.patch('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial/', curso);
    }
}
