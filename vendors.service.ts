import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
import { Orders } from './orders';
import { Vendor } from './vendors';
@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  constructor(private _http : Http) {
   }
   addvendor(vendor : Vendor) : Observable<string> {
    return this._http.post("http://localhost:8080/addvendor/",vendor).
    map((res : Response) => res.text());
  }

  searchVendor(uvid : number) : Observable<Vendor> {
    return this._http.get("http://localhost:8080/vendors/"+uvid).map((res: Response) => res.json());
  }
  showVendor() : Observable<Vendor[]> {
    return this._http.get("http://localhost:8080/showvendors")
    .map((res: Response) => res.json());
  }
  showAuthenticate(uvusername : string , uvpassword : string) : Observable<String> {
    return this._http.get("http://localhost:8080/vendorAuthenticate/"+uvusername+"/"+uvpassword)
    .map((res: Response) => res.json());
  }
  showvendorAuthen(uvusername : string) : Observable<Vendor> {
    return this._http.get("http://localhost:8080/vendorAuthenv/"+uvusername)
    .map((res: Response) => res.json());
  }
    
}
