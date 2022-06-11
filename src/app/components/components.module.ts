import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { PopInfoComponent } from "./pop-info/pop-info.component";

@NgModule({
  exports: [HeaderComponent, MenuComponent, PopInfoComponent],
  declarations: [HeaderComponent, MenuComponent, PopInfoComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  providers: [],
})
export class ComponentsModule {}
