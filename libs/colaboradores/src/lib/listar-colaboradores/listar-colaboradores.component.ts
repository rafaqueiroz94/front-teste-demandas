import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';
import { Colaboradores } from '../models/colaboradores';
import { CadastrarColaboradoresModule } from '../cadastrar-colaboradores.module';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'everteam-listar-colaboradores',
    templateUrl: './listar-colaboradores.component.html',
    styleUrls: ['./listar-colaboradores.component.scss'],
    providers: [MessageService]
})

export class ListarColaboradoresComponent implements OnInit {
    colaboradores: any;
    first = 0;
    rows = 10;
    remove = null;
    getColaboradores = [];
    constructor(private colaboradoresService: ColaboradoresService,
        private router: Router,
        private route: ActivatedRoute,
        private messageService: MessageService) { }
    ngOnInit(): void {
        this.getAll();
        if (history.state.data) {
            console.log('mensagem deu certo');
            setTimeout(() => this.messageService.add({ severity: 'success', summary: 'Cadastro concluído com sucesso.', life: 2000 }), 300);
        }
    }
    getAll(): void {
        this.colaboradoresService.getColaboradores().subscribe(resultado => {
            console.log(resultado);
            this.colaboradores = resultado;
            console.log(this.colaboradores);
        });

    }

    next() {
        this.first = this.first + this.rows;
    }
    prev() {
        this.first = this.first - this.rows;
    }
    reset() {
        this.first = 0;
    }
    isLastPage(): boolean {
        return this.colaboradores ? this.first === (this.colaboradores.length - this.rows) : true;
    }
    isFirstPage(): boolean {
        return this.colaboradores ? this.first === 0 : true;
    }
}