import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.page.html",
  styleUrls: ["./input.page.scss"],
})
export class InputPage implements OnInit {
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
