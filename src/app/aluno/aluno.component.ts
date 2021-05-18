import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[]
  nameAluno: string;
  aluno: Aluno;
  alunoSelecionado: Aluno;

  constructor(private router: Router, private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAlunos();
    this.aluno = new Aluno();
  }

   getAlunos() {
    this.alunoService.getAlunos().subscribe(
      data => {
        this.alunos = JSON.parse(data['contents']);
      });
  }

   deleteAluno(){
    this.alunoService.deleteAluno(this.alunoSelecionado.nome).subscribe(
      data => {
        alert('Deletado com sucesso');
      });
  }

  selecionar(aluno) {
    this.alunoSelecionado = aluno;
  }

   searchAluno(nameAluno){
    (this.alunoService.searchAluno(nameAluno)).subscribe(
      data => {
        this.alunos = JSON.parse(data['contents']);
      }
    );
  }

  goToAddAluno() {
    this.router.navigate(['aluno/addaluno']);
  }

  goToEditAluno() {
    this.router.navigate(['aluno/addaluno/' + this.alunoSelecionado.nome]);
  }

}
