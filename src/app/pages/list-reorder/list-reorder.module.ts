import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ListReorderPageRouting } from "./list-reorder.routing";
import { ComponentsModule } from "../../components/components.module";
import { ListReorderPage } from "./list-reorder.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListReorderPageRouting,
    ComponentsModule,
  ],
  declarations: [ListReorderPage],
})
export class ListReorderPageModule {}
