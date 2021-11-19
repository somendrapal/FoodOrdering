import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu : Observable<Menu[]>;
  constructor(private _service : MenuService) {
    this.menu = this._service.showMenu();
   }
  ngOnInit(): void {
  }

}
