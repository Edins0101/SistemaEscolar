import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: Curso[];
  nameCurso: string;
  curso: Curso;
  cursoSelecionado: Curso;

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.getCursos();
    this.curso = new Curso();
  }

   getCursos() {
    this.cursoService.getCursos().subscribe(
      data => {
        this.cursos = JSON.parse(data['contents']);
      });
  }

   deleteCurso(){
    this.cursoService.deleteCurso(this.cursoSelecionado.nome).subscribe(
      data => {
        alert('Deletado com sucesso');
      });
  }

  selecionar(curso) {
    this.cursoSelecionado = curso;
  }

   searchCurso(nameCurso){
    (this.cursoService.searchCurso(nameCurso)).subscribe(
      data => {
        this.cursos = JSON.parse(data['contents']);
      }
    );
  }

  goToAddCurso() {
    this.router.navigate(['curso/addcurso']);
  }


  goToEditCurso() {
    this.router.navigate(['curso/addcurso/' + this.cursoSelecionado.nome]);
  }


}
