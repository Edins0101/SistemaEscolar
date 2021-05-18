import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { Curso } from '../models/curso.model';
import { AlunoService } from '../services/aluno.service';
import { CursoService } from '../services/curso.service';
import { MatriculaService } from '../services/matricula.service';

@Component({
  selector: 'app-add-matricula',
  templateUrl: './add-matricula.component.html',
  styleUrls: ['./add-matricula.component.css']
})
export class AddMatriculaComponent implements OnInit {

  matricula
  matriculas :any[];
  operacao = 'Inserir';

  alunos: Aluno[]
  nameAluno: string;
  aluno: Aluno;
  alunoSelecionado

  cursos: Curso[];
  cursosCadastrados: any = [];
  cursoSelecionado
  dataMatriculaCurso
  codigo = 0;

  constructor(private matriculaService: MatriculaService, private alunoService: AlunoService,
    private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunos();
    this.getCursos();
  }

  AddCursoInMatricula(curso, dataMatriculaCurso) {

    let listaMatriculaCurso = {
      "codigo": this.codigo,
      "curso": curso,
      "dataMatriculaCurso": dataMatriculaCurso
    }
    this.cursosCadastrados.push(listaMatriculaCurso);
    this.codigo++;
  }

  getAlunos() {
    this.alunoService.getAlunos().subscribe(
      data => {
        this.alunos = JSON.parse(data['contents']);
      });
  }

  getCursos() {
    this.cursoService.getCursos().subscribe(
      data => {
        this.cursos = JSON.parse(data['contents']);
      });
  }

  removerMatricula(codigo) {
    this.cursosCadastrados.pop(codigo);
  }

  backToMatricula() {
    this.router.navigate(['matricula']);
  }

  saveMatricula() {
    let matriculaobjeto = {
      "aluno": this.alunoSelecionado,
      "listaMatriculaCurso":
        this.cursosCadastrados
    }

    this.matriculaService.saveMatricula(matriculaobjeto).subscribe(
      data => {
        alert('Salvo com sucesso');
        this.router.navigate(['matricula']);
      });
  }
}
