import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartReplyPage } from './smart-reply.page';

const routes: Routes = [
  {
    path: '',
    component: SmartReplyPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartReplyRoutingModule {}
