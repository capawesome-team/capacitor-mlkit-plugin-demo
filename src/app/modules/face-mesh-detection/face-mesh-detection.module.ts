import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { FaceMeshDetectionRoutingModule } from './face-mesh-detection-routing.module';

import { FaceMeshDetectionPage } from './face-mesh-detection.page';

@NgModule({
  imports: [
    SharedModule,
    FaceMeshDetectionRoutingModule,
    FaceMeshDetectionPage,
  ],
})
export class FaceMeshDetectionModule {}
