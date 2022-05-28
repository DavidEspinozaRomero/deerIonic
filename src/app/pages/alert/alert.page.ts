import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}
  //#region variables
  title: string = "Alert page";
  //#endregion variables
  ngOnInit() {}

  //#region methods
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          id: "cancel-button",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          id: "confirm-button",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentAlertInput() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      inputs: [
        {
          name: "name1",
          type: "text",
          placeholder: "Placeholder 1",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          id: "cancel-button",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          id: "confirm-button",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  //#endregion methods
}

//#region Interfaces
// interface AlertButton {
//   text: string;
//   role?: "cancel" | "destructive" | string;
//   cssClass?: string | string[];
//   handler?: (value: any) => boolean | void | { [key: string]: any };
// }

// interface AlertInput {
//   type?: TextFieldTypes | "checkbox" | "radio" | "textarea";
//   name?: string;
//   placeholder?: string;
//   value?: any;
//   label?: string;
//   checked?: boolean;
//   disabled?: boolean;
//   id?: string;
//   handler?: (input: AlertInput) => void;
//   min?: string | number;
//   max?: string | number;
//   cssClass?: string | string[];
//   attributes?: { [key: string]: any };
//   tabindex?: number;
// }

// interface AlertOptions {
//   header?: string;
//   subHeader?: string;
//   message?: string | IonicSafeString;
//   cssClass?: string | string[];
//   inputs?: AlertInput[];
//   buttons?: (AlertButton | string)[];
//   backdropDismiss?: boolean;
//   translucent?: boolean;
//   animated?: boolean;
//   htmlAttributes?: { [key: string]: any };

//   mode?: Mode;
//   keyboardClose?: boolean;
//   id?: string;

//   enterAnimation?: AnimationBuilder;
//   leaveAnimation?: AnimationBuilder;
// }
//#endregion Interfaces
