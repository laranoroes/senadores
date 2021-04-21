import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { DespesasService, Despesas } from '../despesas.service';


@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css'],

})
export class DespesasSenadorComponent implements OnInit {
  
  id: number;
  despesas: Despesas;
  despesaSenador: [{
      tipo: number,
      fornec: string,
      ano: number,
      mes: number,
      dia: number,
      valor: number
  }]
  nomeSenador: string;
 

  
  constructor(public despesasService: DespesasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'));

      //Código utilizado quando o arquivo JSON era servido na porta 3000
      // this.despesasService.listaDespesas(this.id).subscribe(despesasSenadores =>{
      //   this.despesas = despesasSenadores;
      //   this.despesaSenador = this.despesas.despesas;
      //   this.nomeSenador = this.despesas.nomeSenador;
      // })

      this.despesas = this.despesasService.Despesas.despesasSenadores[this.id - 1];  
      this.despesaSenador = this.despesas.despesas;
      this.nomeSenador = this.despesas.nomeSenador;
    })
  }

  valorTotalTipo(number) { 
  var totalTipo  = 0;
    for (let despesa of this.despesaSenador) {
      if (despesa.tipo == number) {
        totalTipo = totalTipo + despesa.valor;
      }
    }
    return totalTipo;    
  }

  valorTotal() {
    var total = 0;
    for (let despesa of this.despesaSenador) {
      total = total + despesa.valor 
    }
    return total;
  }

}
