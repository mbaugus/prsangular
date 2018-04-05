import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const url = 'http://localhost:61165/file/upload/';

//const localurl = '/blog/fileupload/';

@Injectable()
export class FileService {

  //headers = new HttpHeaders({'Content-Type': 'undefined', 'Process-Data': 'false'} );

  constructor(private http: HttpClient) {}

  UploadPicture(form: FormData): Observable<any> {
   // console.log('Upload: ', form);
    return this.http.post(url, form) as Observable<any>;
  }
}
