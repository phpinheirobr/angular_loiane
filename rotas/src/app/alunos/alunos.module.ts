import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosRoutingModule } from './alunos.routing.module';
import { MaterialModule } from '../angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from '../guards/alunos.deactivated.guard';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    MaterialModule
  ],
  providers: [AlunosService, AlunosDeactivateGuard]
})
export class AlunosModule { }
