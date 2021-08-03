import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Colaboradores } from './cadastro';
import { Excel } from './excel';

@Injectable()
export class CadastroService {

    constructor(private http: HttpClient) { }

    getColaboradores() {
        return this.http.get<Colaboradores[]>('http://localhost:3000/colaboradores');
    }

    createColaboradores(body) {
        return this.http.post<Colaboradores>('http://localhost:3000/colaboradores', body);
    }

    createColaboradoresLote(colaborador) {
        return this.http.post<Colaboradores>('http://localhost:3000/colaboradores', colaborador);
    }

}