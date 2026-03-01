import { NgModule, inject } from '@angular/core';

@NgModule({
  imports: [],
  providers: [],
  exports: [],
})
export class CoreModule {
  constructor() {
    const parentModule = inject(CoreModule, { optional: true, skipSelf: true });

    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.',
      );
    }
  }
}
