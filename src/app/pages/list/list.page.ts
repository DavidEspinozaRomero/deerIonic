import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  //#region variables

  //#endregion variables

  constructor() {}
  ngOnInit() {}

  //#region methods
  favorite(item) {
    console.log("favorite", item);
  }
  share(item) {
    console.log("share", item);
  }
  unread(item) {
    console.log("unread", item);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
