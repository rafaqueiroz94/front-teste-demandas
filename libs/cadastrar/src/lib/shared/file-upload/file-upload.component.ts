import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CadastroService } from "../../Services/cadastro.service";
import { FileUploadStorageService } from '../../Services/file-upload-storage.service';
import { MessageService } from 'primeng/api';

import * as XLSX from 'xlsx';
import { Excel } from '../../Services/excel';
import { Colaboradores } from '../../Services/cadastro';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [MessageService]
})

export class FileUploadComponent implements OnInit {
  @ViewChild('inputFile') myInputVariable: ElementRef;

  cadastrarBoolean = false;
  successToast = false;
  fileToUpload: any[] = [];
  haveFile = false;
  arquivoInvalido = false;


  constructor(
    private fileUploadStorageService: FileUploadStorageService,
    private cadastroService: CadastroService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {

  }

  delete() {
    this.fileToUpload = [];
    this.haveFile = false;
    this.myInputVariable.nativeElement.value = '';
    this.cadastrarBoolean = false;

  }


  sendUpload() {
    if (this.haveFile == false) {
      this.messageError("Error", "Nenhum arquivo selecionado.");
    } else {
      const fileData = this.fileUploadStorageService.getFileData();
      const arrayErrors = [];
      console.log("file data", fileData);
      console.log("file.data", fileData.data)

      if (fileData.data != undefined) {
        fileData.data.forEach((element) => {

          //FAZER A VERIFICAÇÃO DOS CAMPOS OBRIGATÓRIOS QUANDO SABER QUAIS CAMPOS SÃO OBRIGATÓRIOS, esses aqui são só pra teste

          element.nome === undefined ? arrayErrors.push('nome') : ('');
          element.sap === undefined ? arrayErrors.push('sap') : ('');
          element.nome_projeto === undefined ? arrayErrors.push('nome_projeto') : ('');

        });

        if (arrayErrors.length === 0) {
          fileData.data.forEach(element => {
            console.log("Entrou no foreach");
            this.cadastroService.createColaboradoresLote(element).subscribe({
              next: (response: any) => {
                console.log("DSADSA!", response);

              },
              error: (err: any) => {
                console.log('Deu ruim');
              }
            })
          });

          setTimeout(() => this.router.navigate(['/colaboradores'], { state: { data: { teste: this.successToast } } }), 500);
        } else {
          this.messageError('Erro', 'Existem campos obrigatórios não preenchidos');
        }

      } else {
        this.messageService.add({
          severity: 'custom', summary: 'Arquivo fora do padrão.',
          detail: 'Utilize o template disponibilizado e verifique se há algum dado faltante..', life: 3000
        });
        this.arquivoInvalido = true;
      }


    }
  }


  // Convertendo XLSX para JSON
  fileSelect(event) {

    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const filetest = event.target.files[0];
    console.log(filetest.name);

    const nomeArquivo = filetest.name;
    const tipoDeArquivo = nomeArquivo.includes(".xls");

    if (tipoDeArquivo) {
      for (let file of event.target.files) {
        this.fileToUpload.push(file);
      }
      this.haveFile = true


      reader.onload = () => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});

        if (jsonData.Planilha1 === undefined) {
          this.messageError('Arquivo fora do padrão.', 'Utilize o template disponibilizado e verifique se há algum dado faltante...');

        } else {
          this.fileUploadStorageService.setFileData({ data: jsonData.Planilha1, fileName: this.fileToUpload });
          this.cadastrarBoolean = true;
        }

      }
      reader.readAsBinaryString(filetest);

    } else {
      this.messageService.add({ severity: 'custom', summary: 'Esse formato não é suportado.', detail: 'Suba o arquivo em ".xls" (excel).', life: 3000 });
      this.arquivoInvalido = true;
    }


  }

  messageError(summary, detail) {
    this.messageService.add({
      severity: 'custom', summary,
      detail, life: 3000
    });
    this.delete();
  }
}
