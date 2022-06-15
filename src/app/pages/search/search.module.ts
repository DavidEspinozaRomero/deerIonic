import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { SearchPageRouting } from "./search.routing";
import { ComponentsModule } from "../../components/components.module";
import { SearchPage } from "./search.page";
import { FilterTextPipe } from "../../pipes/filter-text.pipe";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SearchPageRouting,
    ComponentsModule,
    FilterTextPipe,
  ],
  declarations: [SearchPage],
})
export class SearchPageModule {}
