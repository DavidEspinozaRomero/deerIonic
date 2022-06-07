import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

import { Componente } from "../../interfaces/interfaces";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  //#region variables
  list: Observable<Componente[]>;
  //#endregion variables
  constructor(private menu: MenuController, private dataService: DataService) {}

  ngOnInit() {
    this.list = this.dataService.getMenuOptions();
  }

  //#region Methods
  toggleMenu() {
    this.menu.toggle();
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }
  //#endregion Methods
}

//#region Interfaces

//#endregion Interfaces
