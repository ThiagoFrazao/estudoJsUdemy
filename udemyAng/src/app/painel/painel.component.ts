import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public progresso: number;
  public tentativas: number;
  public fimJogo: boolean;
  @Output() public encerrarJogoEvent: EventEmitter<boolean> = new EventEmitter();

  private audioPath : string = "/assets/faustao-errou.mp3";
  private audioFile : HTMLAudioElement;

  constructor() { 
    this.frases = FRASES;
    this.rodadaAtual = 0;
    this.fraseDaRodada = this.frases[this.rodadaAtual];
    this.instrucao = "Traduza a frase:";
    this.resposta = "";
    this.audioFile = new Audio(this.audioPath);
    this.progresso = 0;
    this.tentativas = 3;
    this.fimJogo = false;
  }

  public atualizarResposta(eventoTexto : Event): void {
    //console.log(eventoTexto);
    this.resposta = (<HTMLInputElement> eventoTexto.target).value;
  }

  public verificarResposta(): void {
    if(this.resposta === this.fraseDaRodada.frasePtBr) {
        this.avancarJogo();
    } else {
      this.errouResposta();
    }
  }

  private avancarJogo(): void {
    this.rodadaAtual++;
    this.progresso += 25;
    this.fraseDaRodada = this.frases[this.rodadaAtual];
    if(this.rodadaAtual == (this.frases.length -1)){
      this.fimJogo = true;
      this.resposta = this.fraseDaRodada.frasePtBr;
      this.encerrarJogoEvent.emit(true)
    } else {
      this.resposta = '';
    }
  }

  private errouResposta(): void {
    this.audioFile.play();
    this.tentativas--;
    if(this.tentativas == -1) {
      this.fimJogo = true;
      this.encerrarJogoEvent.emit(false)
    } else if(this.tentativas == 0) {
      alert("Esta é sua última tentativa.")
    } else {
      alert("A tradução está incorreta.")
    }  
  }

  public reiniciarJogo(): void {
    this.rodadaAtual = 0;
    this.progresso = 0;
    this.resposta = '';
    this.tentativas = 3;
    this.fimJogo = false;
  }

  ngOnInit(): void {
  }
}