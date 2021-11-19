import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Orders } from '../orders';
import { Vendor } from '../vendors';
import { VendorsService } from '../vendors.service';
import { Wallet } from '../wallet';
import { WalletService } from '../wallet.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  cus: Customer;
orderdetails:Orders;
menufound:Menu;
menu:Observable<Menu[]>;
price:number;
msg: string;
vendor:Observable<Vendor[]>
wallet:Observable<Wallet[]>
placeOrder() {
  this.orderdetails.ord_billamount=this.orderdetails.ord_quantity*this.price;
  this._orderService.placeOrder(this.orderdetails).subscribe(x => {
  this.msg = x;
  })
}
 constructor(private _menuService:MenuService, private _vendorService:VendorsService, private _walletService:WalletService, private _orderService:OrdersService) {
  this.orderdetails= new Orders();
 
  this.cus = localStorage.getItem('customerdata')?JSON.parse(localStorage.getItem('customerdata')):[]
  alert(this.cus.cid);
  this.orderdetails.ocid=this.cus.cid;
  this.menu=this._menuService.showMenu();
  this.vendor= this._vendorService.showVendor();
  this.wallet= this._walletService.customerWallet(this.cus.cid);

 }
 showAmount(){
  alert(this.orderdetails.omid);
  this._menuService.searchMenu(this.orderdetails.omid).subscribe(x => {
    this.menufound = x;
    this.price = x.mprice;
  });
}

    
  

ngOnInit(): void {
}

}