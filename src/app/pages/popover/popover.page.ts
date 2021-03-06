import { Component, OnInit } from "@angular/core";
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from "../../components/pop-info/pop-info.component";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  //#region variables
  // The `ion-modal` element reference.
  popover: HTMLElement;
  //#endregion variables

  constructor(public popoverController: PopoverController) {}

  ngOnInit(): void {}
  //#region Apis

  //#endregion Apis

  //#region methods
  async showPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopInfoComponent,
      // cssClass: "my-custom-class",
      event: ev,
      mode: 'ios',
      backdropDismiss: false,
      translucent: true,
    });
    await popover.present();

    // const { role } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    console.log("onDidDismiss resolved with data", data);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
