import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { RefresherPageRouting } from "./refresher.routing";
import { ComponentsModule } from "../../components/components.module";
import { RefresherPage } from "./refresher.page";

@NgModule({
  imports: [CommonModule, IonicModule, RefresherPageRouting, ComponentsModule],
  declarations: [RefresherPage],
})
export class RefresherPageModule {}
