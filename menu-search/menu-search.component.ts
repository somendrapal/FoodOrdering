import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit {
  umid : number;
  menu : Observable<Menu>;

  search() {
    this.menu=this._service.searchMenu(this.umid);
  }
  constructor(private _service : MenuService) 
  { 
    
  }

  ngOnInit(): void {
  }

}
