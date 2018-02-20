import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcGamificService } from './ngc-gamifc.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: []
})

export class NgcGamificModule {
  public static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: NgcGamificModule,
      providers: [
        NgcGamificService, { provide: 'config', useValue: config }
      ]
    }
  };
}
