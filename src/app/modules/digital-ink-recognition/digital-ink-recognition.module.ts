import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { DigitalInkRecognitionRoutingModule } from './digital-ink-recognition-routing.module';

import { DigitalInkRecognitionPage } from './digital-ink-recognition.page';

@NgModule({
  imports: [
    SharedModule,
    DigitalInkRecognitionRoutingModule,
    DigitalInkRecognitionPage,
  ],
})
export class DigitalInkRecognitionModule {}
