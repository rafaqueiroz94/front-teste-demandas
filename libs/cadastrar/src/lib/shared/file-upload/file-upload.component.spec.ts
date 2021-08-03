import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FileUploadComponent } from './file-upload.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FileUploadStorageService } from '../../Services/file-upload-storage.service';
import { CadastroService } from '../../Services/cadastro.service';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

describe('FileUploadComponent', () => {
    let component: FileUploadComponent;
    let fixture: ComponentFixture<FileUploadComponent>;
    let mockUploadService: jasmine.SpyObj<FileUploadStorageService>;
    let mockCadastroService: jasmine.SpyObj<CadastroService>;
    let mockMessageService: jasmine.SpyObj<MessageService>;
    let router: Router;

    let mockData: any = {
        data: [{
            EXT_projeto: "das",
            SAP: "dasdsaFABIO",
            nome: "dasdsadsasa",
            nome_projeto: "dsadsa",
            sobrenome: "dsadasdsa"
        }],
        fileName: [{
            lastModified: 1624569846706,
            name: "template.xls",
            size: 11659,
            type: "application/vnd.ms-excel"
        }]
    };




    beforeEach(async () => {
        mockUploadService = jasmine.createSpyObj('FileUploadStorageService', ['getFileData', 'setFileData']);
        mockCadastroService = jasmine.createSpyObj('CadastroService', ['createColaboradoresLote'])
        mockMessageService = jasmine.createSpyObj('MessageService', ['add'])

        await TestBed.configureTestingModule({
            declarations: [FileUploadComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [
                { provide: FileUploadStorageService, useValue: mockUploadService },
                { provide: CadastroService, useValue: mockCadastroService },
                { provide: MessageService, useValue: mockMessageService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
            .compileComponents();

        router = TestBed.get(Router);

        fixture = TestBed.createComponent(FileUploadComponent)
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('deve criar', () => {
        expect(component).toBeTruthy();
    });

    it('deve fazer upload', () => {
        component.haveFile = true;
        mockUploadService.setFileData.withArgs(mockData).and.returnValue();
        mockUploadService.getFileData.and.returnValue(mockData);
        mockCadastroService.createColaboradoresLote.and.returnValue(of({ nome: 'asd', id: 1 }));

        component.sendUpload();

        expect(mockCadastroService.createColaboradoresLote).toHaveBeenCalled();

    });


    it('deve setar o arquivo', () => {
        const mockFile = new File([''], 'excel.xls', { type: 'file' });
        const mockEvt = { target: { files: [mockFile] } };



        mockUploadService.setFileData.withArgs({ data: {}, fileName: [] });
        component.fileSelect(mockEvt)
    })

    it('deve fazer upload e dar erro na requisição', () => {
        component.haveFile = true;
        mockUploadService.setFileData.withArgs(mockData).and.returnValue();
        mockUploadService.getFileData.and.returnValue(mockData);
        mockCadastroService.createColaboradoresLote.and.returnValue(throwError({ message: 'error' }));

        component.sendUpload();

        expect(mockCadastroService.createColaboradoresLote).toHaveBeenCalled();

    });

    it('deve dar erro ao tentar dar upload em um arquivo com campos não preenchidos', () => {
        component.haveFile = true;
        mockData.data[0].nome = undefined;
        mockUploadService.setFileData.withArgs(mockData).and.returnValue();
        mockUploadService.getFileData.and.returnValue(mockData);


        component.sendUpload();

        expect(component.haveFile).toEqual(false);
    });

    xit('não deve fazer upload', () => {
        component.haveFile = true;
        mockData.data = undefined;
        mockUploadService.getFileData.and.returnValue(mockData);

        component.sendUpload();
        expect(component.arquivoInvalido).toEqual(true);
    })


    it('deve deletar', () => {
        component.haveFile = true;
        component.fileToUpload = ['asd'];

        component.delete();

        expect(component.fileToUpload.length).toEqual(0);
        expect(component.haveFile).toEqual(false);
        expect(component.myInputVariable.nativeElement.value).toEqual('');
    });

    describe('Ao selecionar um arquivo de outro formato', () => {

        it('deve mostrar uma mensagem de erro', () => {

            const mockFile = new File([''], 'pdf.pdf', { type: 'file' });
            const mockEvt = { target: { files: [mockFile] } };

            component.fileSelect(mockEvt);

            expect(component.arquivoInvalido).toBe(true);

        });
    });

    describe('Ao selecionar um arquivo excel fora do template', () => {

        it('deve mostrar uma mensagem de erro', () => {

            const mockFile = new File([''], 'pdf.xls', { type: 'file' });
            const mockEvt = { target: { files: [mockFile] } };

            component.fileSelect(mockEvt);

            expect(component.haveFile).toBe(true);

        })
    });

    describe('Ao tentar enviar um arquivo vazio', () => {

        it('deve mostrar um alerta', () => {
            spyOn(window, "alert");
            component.haveFile = false;

            component.sendUpload();
            expect(window.alert).toHaveBeenCalledWith("vazio");
        })
    });


});

