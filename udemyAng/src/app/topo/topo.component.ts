import { Component } from "@angular/core";

//E possivel utilizar tbm o atributo template e definir o html diretamente na marcacao 
@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês na Udemy';


}