import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObjectDetectionPage } from './object-detection.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectDetectionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectDetectionRoutingModule {}
