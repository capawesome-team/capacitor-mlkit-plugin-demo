import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextRecognitionPage } from './text-recognition.page';

const routes: Routes = [
  {
    path: '',
    component: TextRecognitionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextRecognitionRoutingModule {}
