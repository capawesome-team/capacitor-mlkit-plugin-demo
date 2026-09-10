import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageLabelingPage } from './image-labeling.page';

const routes: Routes = [
  {
    path: '',
    component: ImageLabelingPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageLabelingRoutingModule {}
