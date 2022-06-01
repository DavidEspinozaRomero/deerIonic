import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fab",
  templateUrl: "./fab.page.html",
  styleUrls: ["./fab.page.scss"],
})
export class FabPage implements OnInit {
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
