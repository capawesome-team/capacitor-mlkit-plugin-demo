import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { SmartReplyRoutingModule } from './smart-reply-routing.module';

import { SmartReplyPage } from './smart-reply.page';

@NgModule({
  imports: [SharedModule, SmartReplyRoutingModule, SmartReplyPage],
})
export class SmartReplyModule {}
