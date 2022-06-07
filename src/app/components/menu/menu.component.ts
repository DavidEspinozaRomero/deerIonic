import { Component, OnInit, Input } from "@angular/core";
import { Componente } from "../../interfaces/interfaces";
import { Observable } from "rxjs";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
})
export class MenuComponent implements OnInit {
  //#region Variables
  list: Observable<Componente[]>;
  //#endregion Variables

  constructor(private dataService: DataService) {}

  ngOnInit() {
		this.list = this.dataService.getMenuOptions()
	}
}
