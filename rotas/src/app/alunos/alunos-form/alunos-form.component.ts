import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  
  aluno: any = {};
  id: number;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
          this.id = params['id'];
      }
    );
    this.aluno = this.alunoService.getAluno(this.id);
  }

}
