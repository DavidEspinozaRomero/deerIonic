import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  exports: [HeaderComponent, MenuComponent],
  declarations: [HeaderComponent, MenuComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  providers: [],
})
export class ComponentsModule {}
