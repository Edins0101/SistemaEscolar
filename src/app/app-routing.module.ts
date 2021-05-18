import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from './add-aluno/add-aluno.component';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { AddMatriculaComponent } from './add-matricula/add-matricula.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Routes = [
  // {path: '**', pathMatch: 'full', redirectTo: 'curso'},
  {path: 'aluno', component: AlunoComponent, pathMatch: 'full'},
  {path: 'aluno/addaluno', component: AddAlunoComponent, pathMatch: 'full'},
  {path: 'aluno/addaluno/:nome', component: AddAlunoComponent, pathMatch: 'full'},
  {path: 'matricula', component: MatriculaComponent, pathMatch: 'full'},
  {path: 'curso', component: CursoComponent, pathMatch: 'full'},
  {path: 'curso/addcurso', component: AddCursoComponent, pathMatch: 'full'},
  {path: 'curso/addcurso/:nome', component: AddCursoComponent, pathMatch: 'full'},
  {path: 'matricula/addmatricula', component: AddMatriculaComponent, pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
