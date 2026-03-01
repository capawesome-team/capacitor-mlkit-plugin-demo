import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { TranslationRoutingModule } from './translation-routing.module';

import { TranslationPage } from './translation.page';

@NgModule({
  imports: [SharedModule, TranslationRoutingModule, TranslationPage],
})
export class TranslationModule {}
