import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-demov',
  templateUrl: './demov.component.html',
  styleUrls: ['./demov.component.css']
})
export class DemovComponent implements OnInit {
  topic : string;
  customers : string;
  customer : Observable<Vendor>;
  cust : Vendor;

  constructor(private _service : VendorsService,private router:Router)
  { 
    this.customers=localStorage.getItem("user1");
    this._service.showvendorAuthen(this.customers).subscribe(x=>{
      this.cust=x;
      localStorage.setItem('customerdata1', JSON.stringify(x));
    })
  //  this.customer=this._service.showcustomerAuthen(this.customers);
 //   localStorage.setItem('customerdata', JSON.stringify(this.customer));
  }
  vendorblogin() {
    this.router.navigate(['/vendorauthenticate'])
  }

  ngOnInit(): void {
  }

}
