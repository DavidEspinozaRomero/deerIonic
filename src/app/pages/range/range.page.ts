import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-range",
  templateUrl: "./range.page.html",
  styleUrls: ["./range.page.scss"],
})
export class RangePage implements OnInit {
  //#region variables
  //#endregion variables

  constructor() {}

  ngOnInit(): void {}
  //#region Apis

  //#endregion Apis

  //#region methods
  public customFormatter(value: number) {
    // console.log(value);
    // this.porcent = (value / 100) ? (value / 100) : 0.01;
    return `${value}%`;
  }


  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
