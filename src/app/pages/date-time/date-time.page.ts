import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-time",
  templateUrl: "./date-time.page.html",
  styleUrls: ["./date-time.page.scss"],
})
export class DateTimePage implements OnInit {
  //#region variables

  //#endregion variables
  constructor() {}
  ngOnInit() {}

  //#region methods
  confirm() {
    console.log("confirm");
  }

  reset() {
    console.log("reset");
  }
  formatDate(value: any) {
    console.log(value);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
