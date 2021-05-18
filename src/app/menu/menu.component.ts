import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    { key: "curso", value: "Curso" },
    { key: "aluno", value: "Aluno" },
    { key: "matricula", value: "Matrícula" },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
