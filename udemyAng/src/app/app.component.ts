import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoNaoAcabou: boolean;
  public foiVitoria: boolean;

  constructor() {
    this.jogoNaoAcabou = true;
    this.foiVitoria = false;
  }

  public telaFinal(isVitoria: boolean): void {
    this.foiVitoria = isVitoria;
    if(this.foiVitoria) {
      alert("Você venceu!")
    } else {
      alert("Você perdeu!")
    }
    this.jogoNaoAcabou = false;
  }

  public reiniciarJogo(): void {
    this.jogoNaoAcabou = true;
  }
}
