import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntityExtractionPage } from './entity-extraction.page';

const routes: Routes = [
  {
    path: '',
    component: EntityExtractionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityExtractionRoutingModule {}
