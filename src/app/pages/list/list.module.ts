import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ListPageRouting } from "./list.routing";
import { ComponentsModule } from "../../components/components.module";
import { ListPage } from "./list.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListPageRouting,
    ComponentsModule,
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
