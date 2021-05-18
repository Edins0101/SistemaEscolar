import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatriculaService } from '../services/matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  matriculas :any[];
  matriculaSelected;
  matriculaRadioSelected;

  constructor(private matriculaService: MatriculaService, private router: Router) { }

  ngOnInit(): void {
    this.getMatriculas();
  }

  getMatriculas() {
    this.matriculaService.getMatriculas().subscribe(
      data => {
        this.matriculas = JSON.parse(data['contents']);
      });
  }

  searchMatricula(codigoMatricula){
    this.matriculaService.searchMatricula(codigoMatricula).subscribe(
      data => {
        this.matriculas = JSON.parse(data['contents']);
      }
    );
  }

  selecionar(matricula) {
    this.matriculaRadioSelected = matricula;

  }

  goToAddMatricula() {
    this.router.navigate(['matricula/addmatricula']);
  }

  deleteMatricula(){
    this.matriculaService.deleteMatricula(this.matriculaRadioSelected).subscribe(
      data => {
        alert('Deletado com sucesso');
      });
  }
}
