import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { RangePageRouting } from "./range.routing";
import { ComponentsModule } from "../../components/components.module";
import { RangePage } from "./range.page";

@NgModule({
  imports: [CommonModule, IonicModule, RangePageRouting, ComponentsModule],
  declarations: [RangePage],
})
export class RangePageModule {}
