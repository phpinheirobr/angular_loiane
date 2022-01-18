import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 01', email: 'chigo_pinga@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno_02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno_03@email.com' }
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].id == id) {
        return alunos[i];
      }
    }
    return null;
  }
  
  constructor() { }
}
