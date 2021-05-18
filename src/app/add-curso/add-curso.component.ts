import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';


@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  curso: Curso = new Curso;
  operacao = 'Inserir';

  constructor(private router: Router, private cursoService: CursoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isEditPage();
  }

  isEditPage(){

    let nameCurso: string = this.activatedRoute.snapshot.params.nome;

    if(nameCurso) {
      this.operacao = 'Alterar';
      this.searchCurso(nameCurso);
    }
  }

  searchCurso(nameCurso){
    this.cursoService.searchCurso(nameCurso).subscribe(
      data => {
        this.curso = JSON.parse(data['contents'])[0];
      }
    );
  }

  backToCurso() {
    this.router.navigate(['curso']);
  }

  editCurso(curso) {
    this.cursoService.editCurso(curso).subscribe(
      data => {
        alert('Editado com sucesso');
        this.router.navigate(['curso']);
      });
  }

  saveCurso(curso: Curso) {
    this.cursoService.saveCurso(curso).subscribe(
      data => {
        alert('Salvo com sucesso');
        this.router.navigate(['curso']);
      });
  }
}
