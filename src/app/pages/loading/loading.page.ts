import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.page.html",
  styleUrls: ["./loading.page.scss"],
})
export class LoadingPage implements OnInit {
  //#region variables
  loading:any
  //#endregion variables

  constructor(public loadingController: LoadingController) {}

  ngOnInit(): void {
    this.presentLoading("Please wait...");

    setTimeout(() => {
      // this.loading.dismiss() // revizar este codigo
    }, 2000);
  }
  //#region Apis

  //#endregion Apis

  //#region methods
  async presentLoading(message:string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message,
      spinner: 'bubbles'
      // duration: 2000,
    });
    this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log("Loading dismissed!");
  }

  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: null,
  //     duration: 5000,
  //     message: "Click the backdrop to dismiss early...",
  //     translucent: true,
  //     cssClass: "custom-class custom-loading",
  //     backdropDismiss: true,
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log("Loading dismissed with role:", role);
  // }

  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
