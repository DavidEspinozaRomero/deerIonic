import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ModalPageRouting } from "./modal.routing";
import { ComponentsModule } from "../../components/components.module";
import { ModalPage } from "./modal.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalPageRouting,
    ComponentsModule,
  ],
  declarations: [ModalPage],
})
export class ModalPageModule {}
