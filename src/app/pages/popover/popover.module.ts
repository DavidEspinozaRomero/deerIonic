import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { PopoverPageRouting } from "./popover.routing";
import { ComponentsModule } from "../../components/components.module";
import { PopoverPage } from "./popover.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PopoverPageRouting,
    ComponentsModule,
  ],
  declarations: [PopoverPage],
})
export class PopoverPageModule {}
