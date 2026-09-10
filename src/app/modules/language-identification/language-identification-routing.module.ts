import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanguageIdentificationPage } from './language-identification.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageIdentificationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageIdentificationRoutingModule {}
