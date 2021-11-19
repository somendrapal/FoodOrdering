import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Vendor } from '../vendors';

@Component({
  selector: 'app-accept-reject',
  templateUrl: './accept-reject.component.html',
  styleUrls: ['./accept-reject.component.css']
})
export class AcceptRejectComponent implements OnInit {
ven : Vendor;
oid: number;
ovid: number;
ord_status:string;
  result:string;
  constructor(private _orderservice:OrdersService) {
    this.ven = localStorage.getItem('customerdata1')?JSON.parse(localStorage.getItem('customerdata1')):[]
    this.ovid=this.ven.vid;
    this.oid=parseInt(localStorage.getItem("oid"))
   }

  ngOnInit(): void {
  }
   acceptReject(){
    this._orderservice.acceptrejectorders(this.oid,this.ovid,this.ord_status).subscribe
    (x=>{
      this.result=x;
    })
   }
}
