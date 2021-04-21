import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { DespesasService, Senadores } from '../despesas.service';

@Component({
  selector: 'app-lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.css']
})

export class ListaSenadoresComponent implements OnInit {

  senadores: Senadores[] = [];
  constructor(public despesasService: DespesasService) { }

  ngOnInit(): void {

    // Código utilizado quando o arquivo JSON era servido na porta 3000
    // this.despesasService.listaSenadores().subscribe(senadores => {
    //   this.senadores = senadores;
    // }) 

    this.senadores = this.despesasService.Despesas.senadores;    
  }

}
