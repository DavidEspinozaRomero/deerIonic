import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InfiniteScrollRouting } from "./infinite-scroll.routing";
import { ComponentsModule } from "../../components/components.module";
import { InfiniteScrollPage } from "./infinite-scroll.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollRouting,
    ComponentsModule,
  ],
  declarations: [InfiniteScrollPage],
})
export class InfiniteScrollPageModule {}
