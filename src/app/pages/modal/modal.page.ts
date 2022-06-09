import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalInfoPage } from "../modal-info/modal-info.page";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  //#region variables
  // The `ion-modal` element reference.
  modal: HTMLElement;
  //#endregion variables

  constructor(public modalController: ModalController) {}

  ngOnInit(): void {}
  //#region Apis

  //#endregion Apis

  //#region methods

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: { name: "David Espinoza", country: "Ecuador" },

      // cssClass: "my-custom-class",
    });
    return await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
