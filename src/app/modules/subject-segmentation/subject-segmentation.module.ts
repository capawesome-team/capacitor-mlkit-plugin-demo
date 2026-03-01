import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { SubjectSegmentationRoutingModule } from './subject-segmentation-routing.module';

import { SubjectSegmentationPage } from './subject-segmentation.page';

@NgModule({
  imports: [
    SharedModule,
    SubjectSegmentationRoutingModule,
    SubjectSegmentationPage,
  ],
})
export class SubjectSegmentationModule {}
