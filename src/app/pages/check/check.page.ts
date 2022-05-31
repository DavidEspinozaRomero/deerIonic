import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check",
  templateUrl: "./check.page.html",
  styleUrls: ["./check.page.scss"],
})
export class CheckPage implements OnInit {
  //#region variables
  list: any[] = [
    { name: "primary", checked: false },
    { name: "secondary", checked: true },
    { name: "tertiary", checked: false },
    { name: "success", checked: true },
  ];
  //#endregion variables
  constructor() {}
  ngOnInit() {}

  //#region methods
  onClick(item: any) {
    console.log(item);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
