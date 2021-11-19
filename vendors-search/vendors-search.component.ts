import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-vendors-search',
  templateUrl: './vendors-search.component.html',
  styleUrls: ['./vendors-search.component.css']
})
export class VendorsSearchComponent implements OnInit {
  topic : string
  vendors : string;
  vendor : Observable<Vendor>;
  vendor1 : Vendor;
  constructor(private _service : VendorsService)
  { 
    this.vendors=localStorage.getItem("user1");
    
    this.vendor1 = localStorage.getItem('customerdata1')? JSON.parse(localStorage.getItem('customerdata1')):[];
    alert(this.vendor1.vid)
    this.vendor=this._service.showvendorAuthen(this.vendors);
  }


  ngOnInit(): void {
  }

}
