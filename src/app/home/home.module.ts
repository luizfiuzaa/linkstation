import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LinksComponent } from '../components/links/links.component';
import { EastereggComponent } from '../components/easteregg/easteregg.component';
import { PfpComponent } from '../components/pfp/pfp.component';
import { SwitchthemeComponent } from '../components/switchtheme/switchtheme.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SwitchthemeComponent, PfpComponent, LinksComponent, EastereggComponent]
})
export class HomePageModule {}
