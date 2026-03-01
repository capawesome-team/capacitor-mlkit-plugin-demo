import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { DocumentScannerRoutingModule } from './document-scanner-routing.module';

import { DocumentScannerPage } from './document-scanner.page';

@NgModule({
  imports: [SharedModule, DocumentScannerRoutingModule, DocumentScannerPage],
})
export class DocumentScannerModule {}
