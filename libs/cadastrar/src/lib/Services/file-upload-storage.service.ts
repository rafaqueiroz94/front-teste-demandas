import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadStorageService {

    data: any;

    constructor() { }

    getFileData() {
        return this.data;
    }

    setFileData(data: any) {
        this.data = data;
        console.log(this.data)
    }



}