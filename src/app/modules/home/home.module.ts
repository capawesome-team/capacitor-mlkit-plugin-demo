import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, HomePage],
})
export class HomePageModule {}
