import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { LoadingPageRouting } from "./loading.routing";
import { ComponentsModule } from "../../components/components.module";
import { LoadingPage } from "./loading.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoadingPageRouting,
    ComponentsModule,
  ],
  declarations: [LoadingPage],
})
export class LoadingPageModule {}
