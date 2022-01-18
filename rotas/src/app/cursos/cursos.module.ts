import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { MaterialModule } from 'src/app/angular-material/material.module';



@NgModule({
  declarations: [
    CursosComponent, 
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],    
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
