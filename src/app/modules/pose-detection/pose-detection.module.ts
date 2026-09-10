import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { PoseDetectionRoutingModule } from './pose-detection-routing.module';

import { PoseDetectionPage } from './pose-detection.page';

@NgModule({
  imports: [SharedModule, PoseDetectionRoutingModule, PoseDetectionPage],
})
export class PoseDetectionModule {}
