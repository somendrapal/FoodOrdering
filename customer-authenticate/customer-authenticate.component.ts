import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-authenticate',
  templateUrl: './customer-authenticate.component.html',
  styleUrls: ['./customer-authenticate.component.css']
})
export class CustomerAuthenticateComponent implements OnInit {
  
  
  

  ucusername : string;
  ucpassword : string;
  isFormSubmitted : boolean;
  status : Observable<string>;
  sign1() {
    this.router.navigate(['/addcustomer']);
  }
  login(loginForm : NgForm) {
    //  this.isFormSubmitted = false;
      if (loginForm.invalid) {
        return;
      }
      this.isFormSubmitted = true;
    this._service.showcustomerAuthenticate(this.ucusername,this.ucpassword).subscribe(x=>{
      if(x=="1") {
        localStorage.setItem("user",this.ucusername)
        this.router.navigate(['/demo'])
        alert("correct")
      }
      else {
        alert("Invalid Credentials")
      }
    })
  }
  bclogin() {
    this.router.navigate(['/demo1'])
  }
  constructor(private _service : CustomerService,private router : Router) 
  { 
    this.ucusername="";
    this.ucpassword="";
    this.isFormSubmitted=false;
  }
  ngOnInit(): void {
  }

}
    


