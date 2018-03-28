import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequestLineItem } from '../models/purchaserequestlineitem';

const url = 'http://localhost:61165/PurchaseRequestLineItems/';

@Injectable()
export class PrliService {
  constructor(private http: HttpClient) { }
  List(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequestLineItem[]>;
  }
  Get(id: string): Observable<PurchaseRequestLineItem> {
    return this.http.get(url + 'Get/' + id) as Observable<PurchaseRequestLineItem>;
  }
  Create(prli: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Create', prli) as Observable<any>;
  }
  Change(prli: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Update', prli) as Observable<any>;
  }
  Remove(prli: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Remove', prli) as Observable<any>;
  }
  GetByProductId(id: string): Observable<any> {
    return this.http.get(url + 'GetByProductId/' + id) as Observable<PurchaseRequestLineItem[]>;
  }

}
