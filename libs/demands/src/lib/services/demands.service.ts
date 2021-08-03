import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DemandsService {

  constructor(private http: HttpClient) { }

  data = [
    {
        "pre": "PRE-2021-002401",
        "status": "CANCELADA",
        "comunidade": "Tecnologia",
        "executivo": "ANA LAURA LINS",
        "responsavel": "ANA LAURA LINS"
    },
    {
        "pre": "PRE-2021-002401",
        "status": "DEVOLVIDA",
        "comunidade": "Canais",
        "executivo": "ANA LAURA LINS",
        "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "EM EXECUÇÃO",
      "comunidade": "Tecnologia",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "PENDENTE LIDER",
      "comunidade": "Canais",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "EM EXECUÇÃO",
      "comunidade": "Tecnologia",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "DEVOLVIDA",
      "comunidade": "Canais",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "ENCERRADA",
      "comunidade": "Tecnologia",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "DEVOLVIDA",
      "comunidade": "Canais",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "PENDENTE LIDER",
      "comunidade": "Tecnologia",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "PENDENTE LIDER",
      "comunidade": "Canais",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "DEVOLVIDA",
      "comunidade": "Canais",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    },
    {
      "pre": "PRE-2021-002401",
      "status": "EM EXECUÇÃO",
      "comunidade": "Tecnologia",
      "executivo": "ANA LAURA LINS",
      "responsavel": "ANA LAURA LINS"
    }
  ]

  getDemandas() {
    return this.data;
  }

  getDemandsById() {
    
  }

  updateDemands() {
    
  }

  saveDemands(body: any): Observable<any> {
    return this.http.post<any>('https://localhost:44360/', body);
  }

}