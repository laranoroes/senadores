import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import despesas from '../assets/despesas.json';

export interface Despesas {
  id: number,
  nomeSenador: string,    
  despesas: [{
      tipo: number,
      fornec: string,
      ano: number,
      mes: number,
      dia: number,
      valor: number
  }]
  }

export interface Senadores {
  id: number,
  nomeSenador: string
}

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})

export class DespesasService {

  Despesas: any = despesas;

  constructor(private http: HttpClient) { }

  listaSenadores() {
    return this.http.get<Senadores[]>(`${urlBase}/senadores?_sort=name`);
  }

  listaDespesas(id: number) {
    return this.http.get<Despesas>(`${urlBase}/despesasSenadores/${id}`);
  }

}
