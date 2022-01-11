import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

//E possivel utilizar tbm o atributo template e definir o html diretamente na marcacao 
@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnChanges {
    public titulo: string = 'Aprendendo Inglês na Udemy';
    @Input("mudarLado") public naoMudarLado : boolean;
    public centralizar : string;

    constructor() {
        this.naoMudarLado = true;
        this.centralizar = "";
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.naoMudarLado) {
            this.centralizar = "";
        } else {
            this.centralizar = "centralizar";
        }        
    }    
}