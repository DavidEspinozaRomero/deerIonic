import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CardPageRoutingModule } from "./card-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { CardPage } from "./card.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CardPage],
})
export class CardPageModule {}
