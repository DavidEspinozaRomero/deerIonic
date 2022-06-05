import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.page.html",
  styleUrls: ["./infinite-scroll.page.scss"],
})
export class InfiniteScrollPage implements OnInit {
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
