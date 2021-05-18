import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css']
})
export class AddAlunoComponent implements OnInit {

  operacao = 'Inserir';
  aluno: Aluno = new Aluno();

  constructor(private router: Router, private alunoService: AlunoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isEditPage();
  }

  isEditPage(){

    let nameAluno: string = this.activatedRoute.snapshot.params.nome;

    if(nameAluno) {
      this.operacao = 'Alterar';
      this.searchCurso(nameAluno);
    }
  }

  searchCurso(nameAluno){
    this.alunoService.searchAluno(nameAluno).subscribe(
      data => {
        this.aluno = JSON.parse(data['contents'])[0];
      }
    );
  }

  backToAlunos() {
    this.router.navigate(['aluno']);
  }

  editAluno(aluno) {
    this.alunoService.editAluno(aluno).subscribe(
      data => {
        alert('Editado com sucesso');
        this.router.navigate(['aluno']);
      });
  }

  saveAluno(aluno: Aluno) {
    this.alunoService.saveAluno(aluno).subscribe(
      data => {
        alert('salvo com sucesso');
        this.router.navigate(['aluno']);
      });
  }
}
