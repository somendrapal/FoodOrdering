import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  topic : string
  customers : string;
  customer : Observable<Customer>;
  cust : Customer;

  constructor(private _service : CustomerService,private router:Router)
  { 
    this.customers=localStorage.getItem("user");
    this._service.showcustomerAuthen(this.customers).subscribe(x=>{
      this.cust=x;
      localStorage.setItem('customerdata', JSON.stringify(x));
    })
  //  this.customer=this._service.showcustomerAuthen(this.customers);
 //   localStorage.setItem('customerdata', JSON.stringify(this.customer));
  }
  customerblogin() {
    this.router.navigate(['/customerauthenticate']);
  }
  ngOnInit(): void {
  }

}
