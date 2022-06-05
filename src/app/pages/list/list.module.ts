import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ListPageRouting } from "./list.routing";
import { ComponentsModule } from "../../components/components.module";
import { ListPage } from "./list.page";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ListPageRouting,
    ComponentsModule,
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
