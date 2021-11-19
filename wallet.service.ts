import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Wallet } from './wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private _http : Http) { }
  addwallet(wallet : Wallet) : Observable<string> {
    return this._http.post("http://localhost:8080/addwallet/",wallet).
    map((res : Response) => res.text());
  }
  customerWallet(cus_ID : number) : Observable<Wallet[]> {
    return this._http.get("http://localhost:8080/showwallet/"+cus_ID)
    .map((res: Response) => res.json());
  }
  wallet(cus_ID : number ,wal_SOURCE:string) : Observable<Wallet> {
    return this._http.get("http://localhost:8080/showwallets/"+cus_ID+"/"+wal_SOURCE)
    .map((res: Response) => res.json());
  }
}