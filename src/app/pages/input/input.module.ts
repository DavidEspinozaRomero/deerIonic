import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InputPageRouting } from "./input.routing";
import { ComponentsModule } from "../../components/components.module";
import { InputPage } from "./input.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRouting,
    ComponentsModule,
  ],
  declarations: [InputPage],
})
export class InputPageModule {}
