import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerComponent } from './customer/customer.component';
import { DemoComponent } from './demo/demo.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { MenuComponent } from './menu/menu.component';
import { Demo1Component } from './demo1/demo1.component';
import { CustomerAuthenticateComponent } from './customer-authenticate/customer-authenticate.component';
import { VendorsAuthenticateComponent } from './vendors-authenticate/vendors-authenticate.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DemovComponent } from './demov/demov.component';
import { VendorsSearchComponent } from './vendors-search/vendors-search.component';
import { VendorPendingOrdersComponent } from './vendor-pending-orders/vendor-pending-orders.component';
import { VendorTotalOrdersComponent } from './vendors-total-orders/vendors-total-orders.component';
import { CustomerTotalOrdersComponent } from './customer-total-orders/customer-total-orders.component';
import { CustomerPendingOrdersComponent } from './customer-pending-orders/customer-pending-orders.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustomerWalletComponent } from './customer-wallet/customer-wallet.component';
import { CustomerTotalWalletComponent } from './customer-total-wallet/customer-total-wallet.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddwalletComponent } from './addwallet/addwallet.component';
import { AcceptRejectComponent } from './accept-reject/accept-reject.component';
const appRoutes : Routes = 
[
  {path:'',component:Demo1Component},
  {path:'demo1',component:Demo1Component},
  {path:'vendorshows',component:VendorsComponent},
  {path:'addvendor',component:AddvendorComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'customersearch',component:CustomerSearchComponent},
  {path:'vendorsearch',component:VendorsSearchComponent},
  {path:'customershows',component:CustomerComponent},
  {path:'addwallet',component:AddwalletComponent},
  {path:'demo',component:DemoComponent},
  {path:'demov',component:DemovComponent},
  {path:'placeorder',component:PlaceOrderComponent},
  {path:'vendorauthenticate',component:VendorsAuthenticateComponent},
  {path:'customerauthenticate',component:CustomerAuthenticateComponent},
  {path:'demo',component:DemoComponent,children:[
    {path:'customershow',component:CustomerComponent,outlet:'mphasis'},
    {path:'customersearch',component:CustomerSearchComponent,outlet:'mphasis'},
    {path:'customertotalorders',component:CustomerTotalOrdersComponent,outlet:'mphasis'},
    {path:'customerpendingorders',component:CustomerPendingOrdersComponent,outlet:'mphasis'},
    {path:'customertotalwallet',component:CustomerTotalWalletComponent,outlet:'mphasis'},
    {path:'customerwallet',component:CustomerWalletComponent,outlet:'mphasis'},
    {path:'menushow',component:MenuComponent,outlet:'mphasis'},
    {path:'addwallet',component:AddwalletComponent,outlet:'mphasis'},
    {path:'addcustomer',component:AddcustomerComponent,outlet:'mphasis'},
    {path:'addvendor',component:AddvendorComponent,outlet:'mphasis'},   
    {path:'placeorder',component:PlaceOrderComponent,outlet:'mphasis'}, 
    {path:'showmenu',component:MenuComponent,outlet:'mphasis'},  
    {path:'searchmenu',component:MenuSearchComponent,outlet:'mphasis'},   

  ]},
  {path:'demov',component:DemovComponent,children:[
    {path:'vendorshow',component:VendorsComponent,outlet:'mphasis'},
    {path:'acceptreject',component:AcceptRejectComponent,outlet:'mphasis'},
    {path:'vendortotalorders',component:VendorTotalOrdersComponent,outlet:'mphasis'},
    {path:'vendorpendingorders',component:VendorPendingOrdersComponent,outlet:'mphasis'},
    {path:'vendorsearch',component:VendorsSearchComponent,outlet:'mphasis'},
    {path:'addmenu',component:AddmenuComponent,outlet:'mphasis'},
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerSearchComponent,
    MenuSearchComponent,
    DemoComponent,
    MenuComponent,
    Demo1Component,
    CustomerAuthenticateComponent,
    VendorsAuthenticateComponent,
    VendorsComponent,
    DemovComponent,
    VendorsSearchComponent,
    VendorPendingOrdersComponent,
    VendorTotalOrdersComponent,
    CustomerTotalOrdersComponent,
    CustomerPendingOrdersComponent,
    WalletComponent,
    CustomerWalletComponent,
    CustomerTotalWalletComponent,
    PlaceOrderComponent,
    AddcustomerComponent,
    AddvendorComponent,
    AddmenuComponent,
    AddwalletComponent,
    AcceptRejectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
