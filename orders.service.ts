import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private _http : Http) { }
  placeOrder(orders : Orders) : Observable<string> {
    return this._http.post("http://localhost:8080/placeOrder/",orders).
    map((res : Response) => res.text());
  }
  acceptrejectorders(oid:number,vid:number,status:string) : Observable<string> {
    return this._http.post("http://localhost:8080/acceptOrRejectOrder/"+oid+"/"+vid+"/"+status,null)
    .map((res : Response) => res.text());
  }
  vendorOrder(ovid : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/vsorders/"+ovid)
    .map((res: Response) => res.json());
  }
  vendorPendingOrder(ovid : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/vporders/"+ovid)
    .map((res: Response) => res.json());
  }
  customerOrder(ocid : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/sorders/"+ocid)
    .map((res: Response) => res.json());
  }
  customerPendingOrder(ocid : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/porders/"+ocid)
    .map((res: Response) => res.json());
  }
}
