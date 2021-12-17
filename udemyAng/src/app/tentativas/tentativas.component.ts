import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {


  public coracaoVazio: string = "/assets/CoracaoVazio.png";
  public coracaoCheio: string = "/assets/CoracaoCheio.png";

  constructor() { }

  ngOnInit(): void {
  }

}
