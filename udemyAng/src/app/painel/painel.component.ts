import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases : Frase[];
  public instrucao : string;
  public resposta : string;
  public fraseDaRodada : Frase;
  public rodadaAtual : number;

  private audioPath : string = "/assets/faustao-errou.mp3";
  private audioFile : any;

  constructor() { 
    this.frases = FRASES;
    this.rodadaAtual = 0;
    this.fraseDaRodada = this.frases[this.rodadaAtual];
    this.instrucao = "Traduza a frase:";
    this.resposta = "";
    this.audioFile = new Audio(this.audioPath);
  }

  public atualizarResposta(eventoTexto : Event): void {
    //console.log(eventoTexto);
    this.resposta = (<HTMLInputElement> eventoTexto.target).value;
  }

  public verificarResposta(): void {
    if(this.resposta === this.fraseDaRodada.frasePtBr) {
      this.rodadaAtual += 1;
      console.log("Show de bola em...")
    } else {
      this.audioFile.play();
    }
  }


  ngOnInit(): void {
  }

}