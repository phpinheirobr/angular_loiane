import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string [] = []; 

  constructor(private cursoService: CursosService) { }

  onAddCurso(curso: string){
    this.cursoService.addCursos(curso);
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  

}
