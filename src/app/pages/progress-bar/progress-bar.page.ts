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
  porcent: number = 0;
  //#endregion variables

  constructor() {}

  ngOnInit(): void {}
  //#region Apis

  //#endregion Apis

  //#region methods
  public customFormatter(value: number) {
    console.log(value);

    this.porcent = (value / 100);
    return `${value}%`;
  }

  rangeChange(event: any) {
    console.log(event);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
