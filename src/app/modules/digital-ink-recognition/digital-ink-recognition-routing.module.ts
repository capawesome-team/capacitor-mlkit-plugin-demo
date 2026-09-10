import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DigitalInkRecognitionPage } from './digital-ink-recognition.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalInkRecognitionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalInkRecognitionRoutingModule {}
