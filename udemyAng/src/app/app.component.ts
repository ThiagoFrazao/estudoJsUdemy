import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoNaoAcabou: boolean;

  constructor() {
    this.jogoNaoAcabou = true;
  }

  public telaFinal(final: string): void {
    console.log(final);
    alert(final);
    this.jogoNaoAcabou = false;
  }

  public reiniciarJogo(): void {
    this.jogoNaoAcabou = true;
  }
}
