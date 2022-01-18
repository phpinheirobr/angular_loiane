import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: string = 'http://loiane.com';
urlImagem: string = 'http://lorempixel.com/400/200/';
valorAtual: any = '';
valorSalvo: string = '';
isMouseOver: boolean = false;
nome: string = 'abc321321';
nomeDoCurso: string ='Angular';
valorInicial: number = 15;



botaoClicado() {
  alert('botão clicado');
}

onKeyUp(evento: KeyboardEvent) {
this.valorAtual = (<HTMLInputElement>evento.target).value;
} 

salvarValor(valor: any) {
this.valorSalvo = valor;
}

onMouseOverOut() {
this.isMouseOver = !this.isMouseOver;
}

onMudouValor(evento: any) {
console.log(evento.novoValor);
}
  constructor() { }

  ngOnInit(): void {
  }

}
