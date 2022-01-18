import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') valorInput: any = '';
  
  incrementa() {
    console.log(this.valorInput);
    this.valor++
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
