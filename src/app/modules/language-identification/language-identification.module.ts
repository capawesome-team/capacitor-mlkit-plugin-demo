import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { LanguageIdentificationRoutingModule } from './language-identification-routing.module';

import { LanguageIdentificationPage } from './language-identification.page';

@NgModule({
  imports: [
    SharedModule,
    LanguageIdentificationRoutingModule,
    LanguageIdentificationPage,
  ],
})
export class LanguageIdentificationModule {}
