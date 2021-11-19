import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer : Observable<Customer[]>;
  constructor(private _service : CustomerService) {
    this.customer = this._service.showCustomer();
   }

  ngOnInit(): void {
  }

}
