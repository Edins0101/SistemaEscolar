import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getAlunos() {
    return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/');
  }

   searchAluno(nameAluno) {
    return this.httpClient.get('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/' + nameAluno);
  }

   deleteAluno(aluno) {
    return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/remover/', aluno);
  }

   saveAluno(aluno) {
    return this.httpClient.post('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/incluir/', aluno);
  }

   editAluno(aluno) {
    return this.httpClient.patch('https://api.allorigins.win/get?url=https://stormy-badlands-29216.herokuapp.com/api/aluno/alterarparcial/', aluno);
  }
}
