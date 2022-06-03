import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FabPageRoutingModule } from "./fab-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { FabPage } from "./fab.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [FabPage],
})
export class FabPageModule {}