import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { TextRecognitionRoutingModule } from './text-recognition-routing.module';

import { TextRecognitionPage } from './text-recognition.page';

@NgModule({
  imports: [SharedModule, TextRecognitionRoutingModule, TextRecognitionPage],
})
export class TextRecognitionModule {}
