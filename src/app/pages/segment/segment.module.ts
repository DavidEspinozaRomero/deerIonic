import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { SegmentPageRouting } from "./segment.routing";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { SegmentPage } from "./segment.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SegmentPageRouting,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [SegmentPage],
})
export class SegmentPageModule {}
