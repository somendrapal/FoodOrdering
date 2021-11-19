import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Menu } from './menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private _http : Http) { }
  addmenu(menu : Menu) : Observable<string> {
    return this._http.post("http://localhost:8080/addmenu/",menu).
    map((res : Response) => res.text());
  }
  searchMenu(umid : number) : Observable<Menu> {
    return this._http.get("http://localhost:8080/menus/"+umid).map((res: Response) => res.json());
  }
  showMenu() : Observable<Menu[]> {
    return this._http.get("http://localhost:8080/showmenus")
    .map((res: Response) => res.json());
  }
}
