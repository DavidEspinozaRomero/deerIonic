import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-pop-info",
  templateUrl: "pop-info.component.html",
})
export class PopInfoComponent implements OnInit {
  //#region Variables
  list: any[] = Array(40);
  //#endregion Variables

  constructor(public popoverController: PopoverController) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  //#region Methods
  onClick(index: number) {
    console.log("item", index + 1);
    this.popoverController.dismiss({
      data: { item: index + 1 },
    });
  }
  //#endregion Methods
}
