import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConstructorPageRoutingModule } from './home-constructor-routing.module';

import { HomeConstructorPage } from './home-constructor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConstructorPageRoutingModule
  ],
  declarations: [HomeConstructorPage]
})
export class HomeConstructorPageModule {}
