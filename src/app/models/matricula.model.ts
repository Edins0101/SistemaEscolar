import { Aluno } from "./aluno.model";
import { Curso } from "./curso.model";

export class Matricula {
  codigo: number;
  aluno: Aluno;
  listaMatriculaCurso: ListaMatriculaCurso;
}

export class ListaMatriculaCurso {
  codigo: number;
  curso: Curso;
  dataMatriculaCurso: Date;
}
