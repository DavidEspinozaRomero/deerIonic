import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.page.html",
  styleUrls: ["./grid.page.scss"],
})
export class GridPage implements OnInit {
  //#region variables
  items: any[] = Array(12).fill('Hola')
  //#endregion variables
  constructor() {}
  ngOnInit() {}

  //#region methods

  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
