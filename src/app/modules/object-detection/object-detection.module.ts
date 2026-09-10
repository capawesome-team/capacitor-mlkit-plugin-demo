import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ObjectDetectionRoutingModule } from './object-detection-routing.module';

import { ObjectDetectionPage } from './object-detection.page';

@NgModule({
  imports: [SharedModule, ObjectDetectionRoutingModule, ObjectDetectionPage],
})
export class ObjectDetectionModule {}
