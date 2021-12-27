import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  public porcentagem : number;

  constructor() { 
    this.porcentagem = 0;
  }

  public acertar(): void{
    this.porcentagem += 25;
  }

  ngOnInit(): void {
  }

}
