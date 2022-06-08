import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ModalInfoPageRouting } from "./modal-info.routing";
import { ComponentsModule } from "../../components/components.module";
import { ModalInfoPage } from "./modal-info.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalInfoPageRouting,
    ComponentsModule,
  ],
  declarations: [ModalInfoPage],
})
export class ModalInfoPageModule {}
