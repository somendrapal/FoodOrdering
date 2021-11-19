import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Wallet } from '../wallet';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-customer-wallet',
  templateUrl: './customer-wallet.component.html',
  styleUrls: ['./customer-wallet.component.css']
})
export class CustomerWalletComponent implements OnInit {
  user:string
  customer : Observable<Customer>
  cus : Customer
  walletarr : Observable<Wallet>
  uempno : number;
wal_SOURCE : string
search() {
  this.walletarr=this._service.wallet(this.cus.cid,this.wal_SOURCE);
}
  constructor(private _service : WalletService) { 
    this.user = localStorage.getItem("user")
    this.cus = localStorage.getItem('customerdata')?JSON.parse(localStorage.getItem('customerdata')):[]
    //alert(this.ven.ven_id)
    //this.walletarr = this._service.customerWallet(this.cus.cid)

   //this.vendor = this._service.searchVendor(this.ven.ven_id)
  }
  

  ngOnInit(): void {
  }

}