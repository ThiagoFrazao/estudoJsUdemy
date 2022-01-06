import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from './coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  
  @Input("tentativasRestantes") public tentativasRestantes: number;
  public coracaoVazio: string = "/assets/CoracaoVazio.png";
  public coracaoCheio: string = "/assets/CoracaoCheio.png";

  public coracoes: Coracao[];


  constructor() { 
    this.coracoes = this.iniciarCoracoes();
    this.tentativasRestantes = 3;
  }

  ngOnChanges(): void {
    if(this.tentativasRestantes === 3) {
      this.coracoes = this.iniciarCoracoes();      
    } else if(this.tentativasRestantes < 3) {
      this.coracoes[this.tentativasRestantes].isCheio = false;
    }
    
  }

  ngOnInit(): void {
  }

  private iniciarCoracoes(): Coracao[] {
    return [
      new Coracao(true, this.coracaoCheio, this.coracaoVazio),
      new Coracao(true, this.coracaoCheio, this.coracaoVazio),
      new Coracao(true, this.coracaoCheio, this.coracaoVazio)
    ];
  }

}