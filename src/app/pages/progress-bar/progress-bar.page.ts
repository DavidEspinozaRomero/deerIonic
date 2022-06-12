import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopInfoComponent } from "../../components/pop-info/pop-info.component";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.page.html",
  styleUrls: ["./progress-bar.page.scss"],
})
export class ProgressBarPage implements OnInit {
  //#region variables
  porcent: number = 0.05;
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

  rangeChange(event: any) {
    console.log(event.detail.value);
    this.porcent = (event.detail.value / 100);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
