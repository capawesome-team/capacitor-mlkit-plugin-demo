import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ImageLabelingRoutingModule } from './image-labeling-routing.module';

import { ImageLabelingPage } from './image-labeling.page';

@NgModule({
  imports: [SharedModule, ImageLabelingRoutingModule, ImageLabelingPage],
})
export class ImageLabelingModule {}
