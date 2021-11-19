import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-vendors-authenticate',
  templateUrl: './vendors-authenticate.component.html',
  styleUrls: ['./vendors-authenticate.component.css']
})
export class VendorsAuthenticateComponent implements OnInit {

  uvusername : string;
  uvpassword : string;
  isFormSubmitted : boolean;
  status : Observable<string>;
  sign() {
    this.router.navigate(['/addvendor']);
  }
  login(loginForm : NgForm) {
    //  this.isFormSubmitted = false;
      if (loginForm.invalid) {
        return;
      }
      this.isFormSubmitted = true;
    this._service.showAuthenticate(this.uvusername,this.uvpassword).subscribe(x=>{
      if(x=="1") {
        localStorage.setItem("user1",this.uvusername)
      
        this.router.navigate(['/demov'])
      }
      else {
        alert("Invalid credentials");
      }
    })
  }
  bvlogin() {
    this.router.navigate(['/demo1'])
  }
  constructor(private _service : VendorsService,private router : Router) 
  { 
    
    this.uvusername="";
    this.uvpassword="";
    this.isFormSubmitted=false;
  }
  
  ngOnInit(): void {
  }

}
