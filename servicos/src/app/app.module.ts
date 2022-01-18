import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosService } from './cursos/cursos.service';
import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
