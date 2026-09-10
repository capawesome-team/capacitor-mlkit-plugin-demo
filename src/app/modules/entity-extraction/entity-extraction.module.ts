import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { EntityExtractionRoutingModule } from './entity-extraction-routing.module';

import { EntityExtractionPage } from './entity-extraction.page';

@NgModule({
  imports: [SharedModule, EntityExtractionRoutingModule, EntityExtractionPage],
})
export class EntityExtractionModule {}
