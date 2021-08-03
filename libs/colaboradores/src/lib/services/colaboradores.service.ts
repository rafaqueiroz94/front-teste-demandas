import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaboradores } from '../models/colaboradores';

@Injectable()
export class ColaboradoresService {

    constructor(private http: HttpClient) { }

    getColaboradores() {
        return this.http.get<Colaboradores[]>(`http://localhost:3000/colaboradores`);   
      }

      getColaboradoresId(id) {
        return this.http.get<Colaboradores>(`http://localhost:3000/colaboradores/${id}`);   
      }

      uptadeColaborador(id, colaboradores) {
        return this.http.put<Colaboradores>(`http://localhost:3000/colaboradores/${id}`, colaboradores);
      }

      createColaboradores(body) {
        return this.http.post<Colaboradores>('http://localhost:3000/colaboradores', body);
    }

}