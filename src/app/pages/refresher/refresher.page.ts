import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-refresher",
  templateUrl: "./refresher.page.html",
  styleUrls: ["./refresher.page.scss"],
})
export class RefresherPage implements OnInit {
  //#region variables
  items: any[] = [];
  //#endregion variables

  constructor() {}

  ngOnInit(): void {}
  //#region Apis

  //#endregion Apis

  //#region methods
  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      const arr = Array(20);
      this.items = arr;
      event.target.complete();
    }, 2000);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
