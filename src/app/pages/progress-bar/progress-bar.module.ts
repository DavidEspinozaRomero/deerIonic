import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ProgressBarPageRouting } from "./progress-bar.routing";
import { ComponentsModule } from "../../components/components.module";
import { ProgressBarPage } from "./progress-bar.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProgressBarPageRouting,
    ComponentsModule,
  ],
  declarations: [ProgressBarPage],
})
export class ProgressBarPageModule {}
