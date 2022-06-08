import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";


@Component({
  selector: "app-modal-info",
  templateUrl: "./modal-info.page.html",
  styleUrls: ["./modal-info.page.scss"],
})
export class ModalInfoPage implements OnInit {
  //#region variables
  @Input() name:string
  @Input() country:string
  //#endregion variables

  constructor(public modalController: ModalController) {}

  ngOnInit(): void {
  }
  //#region Apis

  //#endregion Apis

  //#region methods
  onClick(){
    this.modalController.dismiss()
  }
  whitProps(){
    this.modalController.dismiss({confirm: true, estado: 'en proceso' })
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
