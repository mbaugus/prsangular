import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequest} from '../models/purchaserequest';

const url = 'http://localhost:61165/PurchaseRequests/';

@Injectable()
export class PrService {
  constructor(private http: HttpClient) { }
  List(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequest[]>;
  }
  Get(id: string): Observable<PurchaseRequest> {
    return this.http.get(url + 'Get/' + id) as Observable<PurchaseRequest>;
  }
  Create(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Create', pr) as Observable<any>;
  }
  Change(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Update', pr) as Observable<any>;
  }
  Remove(pr: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Remove', pr) as Observable<any>;
  }
}
