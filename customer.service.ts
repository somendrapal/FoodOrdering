import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  cse: string;
  custo: Customer;
  constructor(private _http : Http) { 
   }
   addcustomer(customer : Customer) : Observable<string> {
    return this._http.post("http://localhost:8080/addcustomer/",customer).
    map((res : Response) => res.text());
  }
  searchCustomer(ucid : number) : Observable<Customer> {
    return this._http.get("http://localhost:8080/customer/"+ucid).map((res: Response) => res.json());
  }
  showCustomer() : Observable<Customer[]> {
    return this._http.get("http://localhost:8080/showcustomer")
    .map((res: Response) => res.json());
  }
  showcustomerAuthenticate(ucusername : string , ucpassword : string) : Observable<string> {
    return this._http.get("http://localhost:8080/customerAuthenticate/"+ucusername+"/"+ucpassword)
    .map((res: Response) => res.json());
  }
  showcustomerAuthen(ucusername : string) : Observable<Customer> {
    return this._http.get("http://localhost:8080/customerAuthen/"+ucusername)
    .map((res: Response) => res.json());
  }
  
}
