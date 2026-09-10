import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoseDetectionPage } from './pose-detection.page';

const routes: Routes = [
  {
    path: '',
    component: PoseDetectionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoseDetectionRoutingModule {}
