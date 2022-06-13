import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { SearchPageRouting } from "./search.routing";
import { ComponentsModule } from "../../components/components.module";
import { SearchPage } from "./search.page";

@NgModule({
  imports: [CommonModule, IonicModule, SearchPageRouting, ComponentsModule],
  declarations: [SearchPage],
})
export class SearchPageModule {}
