import {
  enableProdMode,
  ErrorHandler,
  importProvidersFrom,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { GlobalErrorHandlerService } from './app/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot(), AppRoutingModule),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
}).catch((err) => console.log(err));
