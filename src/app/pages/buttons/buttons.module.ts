import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ButtonsPage } from './buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
