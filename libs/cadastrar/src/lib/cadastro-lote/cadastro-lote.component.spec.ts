import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CadastroLoteComponent } from './cadastro-lote.component';

describe('CadastroLoteComponent', () => {
    let component: CadastroLoteComponent;
    let fixture: ComponentFixture<CadastroLoteComponent>;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CadastroLoteComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
        })
            .compileComponents();

        router = TestBed.get(Router);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CadastroLoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should navigate to cadastro', () => {
        component = fixture.componentInstance;
        const navigateSpy = spyOn(router, 'navigate');

        component.registerChange();

        expect(navigateSpy).toHaveBeenCalledWith(['/cadastro']);
    })

});
