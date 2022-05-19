import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { HeaderComponent } from "./header/header.component";

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule],
  providers: [],
})
export class ComponentsModule {}
