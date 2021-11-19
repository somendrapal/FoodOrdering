import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Wallet } from '../wallet';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-addwallet',
  templateUrl: './addwallet.component.html',
  styleUrls: ['./addwallet.component.css']
})
export class AddwalletComponent implements OnInit {
  addwal:Wallet;
  customer1:Customer;
  wal:Observable<Wallet[]>
  msg: string;
  
    addwallet() {
      this._walletService.addwallet(this.addwal).subscribe(x => {
      this.msg = x;
      })
      alert("Wallet added Succesfully");
    }
      constructor(private _walletService:WalletService,) {
        this.addwal= new Wallet();
        this.customer1 = localStorage.getItem('customerdata')?JSON.parse(localStorage.getItem('customerdata')):[]
        alert(this.customer1.cid);
        this.addwal.cus_ID=this.customer1.cid;
       }


  ngOnInit(): void {
  }

}
