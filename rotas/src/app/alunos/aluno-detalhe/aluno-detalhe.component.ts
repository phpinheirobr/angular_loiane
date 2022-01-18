import { Router, RouterModule } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  aluno: any;
  iscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
    ) { }

    editarContato(){
      this.router.navigate(['/alunos', this.id, 'editar']);
    }

  ngOnInit(): void {
    this.iscricao = this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.aluno = this.alunoService.getAluno(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.iscricao.unsubscribe();
  }

}
