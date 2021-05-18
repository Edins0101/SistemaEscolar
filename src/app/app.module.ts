import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoComponent } from './aluno/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { HeadComponent } from './head/head.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MenuComponent } from './menu/menu.component';
import { CursoService } from './services/curso.service';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { AddAlunoComponent } from './add-aluno/add-aluno.component';
import { AddMatriculaComponent } from './add-matricula/add-matricula.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    CursoComponent,
    AlunoComponent,
    MatriculaComponent,
    AddCursoComponent,
    AddAlunoComponent,
    AddMatriculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
